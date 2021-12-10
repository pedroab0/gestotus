import { useState } from "react";
import { GetStaticProps } from "next";
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Chip from "@mui/material/Chip";
import { MdCancel, MdAddCircle } from "react-icons/md";

import { Card } from "../../components/atoms/Card";
import { Section } from "../../components/atoms/Section";
import { Banner } from "../../components/Banner";
import { api } from "../../services/api";

import styles from "./styles.module.scss";

interface Category {
	id: number;
	label: string;
}

interface Post {
	id: string;
	title: string;
	description: string;
	date: string;
	autor: string;
	thumbnail: string;
	category: string;
}

interface BlogProps {
	posts: Post[];
	categories: Category[];
}

export default function Blog({ posts, categories }: BlogProps) {
	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

	const [selectedChip, setSelectedChip] = useState<boolean[]>([]);

	const handleCategoryToggle = (categoryToToggle: Category) => () => {
		if (selectedCategories.find((category) => category === categoryToToggle.label)) {
			setSelectedCategories((selectedCategories) =>
				selectedCategories.filter((category) => category !== categoryToToggle.label)
			);
			selectedChip[categoryToToggle.id] = false;
		} else {
			setSelectedCategories([...selectedCategories, categoryToToggle.label]);
			selectedChip[categoryToToggle.id] = true;
		}
	};

	const selectedPosts = () => {
		let selectedPosts: Post[] = posts;
		if (selectedCategories.length > 0) {
			selectedPosts = [];
			selectedCategories.map((category) => {
				posts.map((post) => {
					if (post.category === category) {
						selectedPosts.push(post);
					}
				});
			});
		}
		return selectedPosts;
	};

	return (
		<>
			<Banner />

			<main className={styles.main}>
				<Section background="greyBackground" title="Artigos Selecionados">
					<div className={styles.posts}>
						{selectedPosts().map((post) => {
							return (
								<Card
									cardType="LG"
									key={post.id}
									title={post.title}
									description={post.description}
									author={post.autor}
									date={post.date}
									thumbnail={post.thumbnail}
									link={`/blog/posts/${post.id}`}
								/>
							);
						})}
					</div>
				</Section>

				<Section background="greyBackground">
					<h2 className={styles.categoriesTitle}>Selecione as Categorias</h2>
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
				</Section>
			</main>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await api.get("blog");

	const posts = data.posts.map((post: Post) => {
		return {
			id: post.id,
			title: post.title,
			description: post.description,
			autor: post.autor,
			thumbnail: post.thumbnail,
			date: format(parseISO(post.date), "d MMM yy", {
				locale: ptBR,
			}),
			category: post.category,
		};
	});

	const categories = data.categories.map((category: Category) => {
		return {
			id: category.id,
			label: category.label,
		};
	});

	return {
		props: {
			posts: posts,
			categories: categories,
		},
		revalidate: 60 * 60 * 8,
	};
};
