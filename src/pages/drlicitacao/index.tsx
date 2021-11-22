import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import Image from "next/image";
import Chip from "@mui/material/Chip";
import { MdCancel, MdAddCircle } from "react-icons/md";

import { api } from "../../services/api";
import { Section } from "../../components/atoms/Section";
import styles from "./styles.module.scss";

interface Categorie {
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
	categories: Categorie[];
	links: Link[];
}

export default function DrLicitacao({ categories, links }: DrLicitacaoProps) {
	const [selectedCategories, setSelectedCategories] = useState<Categorie[]>([]);

	const [selectedChip, setSelectedChip] = useState<boolean[]>([]);

	const handleCategorieToggle = (categorieToToggle: Categorie) => () => {
		if (selectedCategories.find((categorie) => categorie.id === categorieToToggle.id)) {
			setSelectedCategories((selectedCategories) =>
				selectedCategories.filter((categorie) => categorie.id !== categorieToToggle.id)
			);
			selectedChip[categorieToToggle.id] = false;
		} else {
			setSelectedCategories([...selectedCategories, categorieToToggle]);
			selectedChip[categorieToToggle.id] = true;
		}
	};

	const selectedLinks = () => {
		let selectedLinks: Link[] = [];
		selectedCategories.map((categorie) => {
			links.map((link) => {
				if (link.value === categorie.value) {
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
						{categories.map((categorie) => {
							let icon: JSX.Element;

							selectedChip[categorie.id]
								? (icon = <MdCancel color={"#4d4c4e"} size={"1.4em"} />)
								: (icon = <MdAddCircle color={"#4d4c4e"} size={"1.4em"} />);

							return (
								<div className={styles.chip} key={categorie.id}>
									<Chip
										sx={{
											backgroundColor: "#fff",
											fontFamily: "Montserrat, sans-serif",
											fontSize: "16px",
											fontWeight: "500",
										}}
										label={categorie.label}
										icon={icon}
										onClick={handleCategorieToggle(categorie)}
									/>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			<Section background="greyBackground">
				<div className={styles.container}>
					{selectedLinks().map((linkToShow) => {
						console.log(linkToShow);
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

	const categories = data.categories.map((categorie: Categorie) => {
		return {
			id: categorie.id,
			label: categorie.label,
			value: categorie.value,
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
