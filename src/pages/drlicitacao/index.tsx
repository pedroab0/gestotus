import { useState } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import Chip from "@mui/material/Chip";
import { MdCancel, MdAddCircle } from "react-icons/md";

import { api } from "../../services/api";
import { Section } from "../../components/atoms/Section";
import styles from "./styles.module.scss";

interface category {
	id: number;
	label: string;
	value: string;
}

interface Link {
	id: number;
	label: string;
	value: string;
	url: string;
}

interface DrLicitacaoProps {
	categories: category[];
	links: Link[];
}

export default function DrLicitacao({ categories, links }: DrLicitacaoProps) {
	const [selectedCategories, setSelectedCategories] = useState<category[]>([]);

	const [selectedChip, setSelectedChip] = useState<boolean[]>([]);

	const handleCategoryToggle = (categoryToToggle: category) => () => {
		if (selectedCategories.find((category) => category.id === categoryToToggle.id)) {
			setSelectedCategories((selectedCategories) =>
				selectedCategories.filter((category) => category.id !== categoryToToggle.id)
			);
			selectedChip[categoryToToggle.id] = false;
		} else {
			setSelectedCategories([...selectedCategories, categoryToToggle]);
			selectedChip[categoryToToggle.id] = true;
		}
	};

	const selectedLinks = () => {
		let selectedLinks: Link[] = [];
		selectedCategories.map((category) => {
			links.map((link) => {
				if (link.value === category.value) {
					selectedLinks.push(link);
				}
			});
		});
		return selectedLinks;
	};

	return (
		<>
			<div className={styles.banner}>
				<Image
					src="/doutor-licitacao.png"
					width={350}
					height={350}
					alt="Dr. Licitação"
					priority
				/>

				<div className={styles.box}>
					<h2>O que está procurando ?</h2>

					<div className={styles.chips}>
						{categories.map((category) => {
							let icon: JSX.Element;

							selectedChip[category.id]
								? (icon = <MdCancel color={"#4d4c4e"} size={"1.4em"} />)
								: (icon = <MdAddCircle color={"#4d4c4e"} size={"1.4em"} />);

							return (
								<div className={styles.chip} key={category.id}>
									<Chip
										sx={{
											backgroundColor: "#fff",
											fontFamily: "Montserrat, sans-serif",
											fontSize: "16px",
											fontWeight: "500",
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
							<a href={linkToShow.url} key={linkToShow.id} className={styles.table}>
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
	const { data } = await api.get("drlicitacao");

	const categories = data.categories.map((category: category) => {
		return {
			id: category.id,
			label: category.label,
			value: category.value,
		};
	});

	const links = data.links.map((link: Link) => {
		return {
			id: link.id,
			label: link.label,
			value: link.value,
			url: link.url,
		};
	});

	return {
		props: {
			categories: categories,
			links: links,
		},
		revalidate: 60 * 60 * 8,
	};
};
