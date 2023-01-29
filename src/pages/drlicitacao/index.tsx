// dependencies
import { useState } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import Chip from "@mui/material/Chip";
import { MdCancel, MdAddCircle } from "react-icons/md";

// graphql
import {
	DrLicitacaoCategory,
	DrLicitacaoDocument,
	useDrLicitacaoQuery,
} from "../../generated/graphql";
import { client, ssrCache } from "../../lib/urql";

// components
import { Section } from "../../components/atoms/Section";

// styles
import styles from "./styles.module.scss";

export default function DrLicitacao() {
	const [{ data }] = useDrLicitacaoQuery();

	const categories = data?.drLicitacaoCategories;
	const links = data?.drLicitacaoLinks;

	const [selectedCategories, setSelectedCategories] = useState<
		Pick<DrLicitacaoCategory, "__typename" | "id" | "categoryId" | "type" | "label">[]
	>([]);
	const [selectedChips, setSelectedChips] = useState<boolean[]>(
		() => categories?.map(() => false) || []
	);

	if (!links || !categories) return null;

	const handleCategoryToggle =
		(
			categoryToToggle: Pick<
				DrLicitacaoCategory,
				"__typename" | "id" | "categoryId" | "type" | "label"
			>
		) =>
		() => {
			if (
				selectedCategories?.find((category) => category.categoryId === categoryToToggle.categoryId)
			) {
				setSelectedCategories((selectedCategories) =>
					selectedCategories?.filter((category) => category.id !== categoryToToggle.id)
				);

				const newSelectedChips = [...selectedChips];
				newSelectedChips[categoryToToggle.categoryId - 1] = false;
				setSelectedChips(newSelectedChips);
			} else {
				setSelectedCategories([...selectedCategories, categoryToToggle]);

				const newSelectedChips = [...selectedChips];
				newSelectedChips[categoryToToggle.categoryId - 1] = true;
				setSelectedChips(newSelectedChips);
			}
		};

	const selectedLinks = () => {
		if (!selectedCategories || selectedCategories.length === 0) return links;

		let selectedLinks: typeof links = [];
		selectedCategories?.map((category) => {
			links?.map((link) => {
				if (link.category === category.type) {
					selectedLinks?.push(link);
				}
			});
		});

		return selectedLinks;
	};

	return (
		<>
			<div className={styles.banner}>
				<Image src="/doutor-licitacao.png" width={350} height={350} alt="Dr. Licitação" priority />

				<div className={styles.box}>
					<h2>O que está procurando ?</h2>

					<div className={styles.chips}>
						{categories?.map((category) => {
							let icon: JSX.Element;
							let chipBackgroundColor: string;
							let chipColor: string;

							selectedChips[category.categoryId - 1]
								? ((icon = <MdCancel color={"#fdfcfc"} size={"1.4em"} />),
								  (chipBackgroundColor = "rgba(51, 51, 51, 0.7)"),
								  (chipColor = "rgba(255, 255, 255, 0.8)"))
								: ((icon = <MdAddCircle color={"#4d4c4e"} size={"1.4em"} />),
								  (chipBackgroundColor = "#fff"),
								  (chipColor = "rgba(0, 0, 0, 0.8)"));

							return (
								<div className={styles.chip} key={category.id}>
									<Chip
										sx={{
											backgroundColor: `${chipBackgroundColor}`,
											fontFamily: "Montserrat, sans-serif",
											fontSize: "16px",
											fontWeight: "500",
											color: `${chipColor}`,
										}}
										label={category.label}
										icon={icon}
										onClick={handleCategoryToggle(category)}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<Section
				background="greyBackground"
				title={
					selectedLinks().length >= 1
						? "Links das categorias Selecionadas"
						: "Selecione alguma das categorias acima"
				}
			>
				<div className={styles.container}>
					{selectedLinks().map((linkToShow) => {
						return (
							<a
								href={linkToShow.url}
								key={linkToShow.id}
								className={styles.table}
								target="_blank"
								rel="noreferrer"
							>
								<p>{linkToShow.label}</p>
							</a>
						);
					})}
				</div>
			</Section>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	await client.query(DrLicitacaoDocument, {}).toPromise();

	return {
		props: {
			urqlState: ssrCache.extractData(),
		},
		revalidate: 60 * 60 * 8,
	};
};

