// dependencies
import { useState } from "react";
import { GetStaticProps } from "next";
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import Chip from "@mui/material/Chip";
import { MdCancel, MdAddCircle } from "react-icons/md";

// graphql
import { ArticleCategory, BlogDocument, useBlogQuery } from "../../generated/graphql";
import { client, ssrCache } from "../../lib/urql";

// components
import { Card } from "../../components/atoms/Card";
import { Section } from "../../components/atoms/Section";
import { Banner } from "../../components/Banner";

// styles
import styles from "./styles.module.scss";

export default function Blog() {
	const [{ data }] = useBlogQuery();
	const categories = data?.articleCategories;
	const posts = data?.posts;

	const [selectedCategories, setSelectedCategories] = useState<
		Pick<ArticleCategory, "__typename" | "id" | "categoryId" | "category" | "label">[]
	>([]);
	const [selectedChips, setSelectedChips] = useState<boolean[]>(
		() => categories?.map(() => false) || []
	);

	if (!posts || !categories) return <></>;

	const handleCategoryToggle =
		(
			categoryToToggle: Pick<
				ArticleCategory,
				"__typename" | "id" | "categoryId" | "category" | "label"
			>
		) =>
		() => {
			if (
				selectedCategories.find((category) => category.categoryId === categoryToToggle.categoryId)
			) {
				setSelectedCategories((selectedCategories) =>
					selectedCategories.filter(
						(category) => category.categoryId !== categoryToToggle.categoryId
					)
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

	const selectedPosts = () => {
		let selectedPosts: typeof posts = posts;

		if (selectedCategories.length > 0) {
			selectedPosts = [];

			selectedCategories.map((category) => {
				posts?.map((post) => {
					post.category.map((postCategory) => {
						if (postCategory === category.category) {
							selectedPosts?.push(post);
						}
					});
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
						{selectedPosts()?.map((post) => {
							return (
								<Card
									cardType="LG"
									key={post.id}
									title={post.title}
									description={post.description}
									author={post.author}
									date={format(parseISO(post.date), "d MMM yy", {
										locale: ptBR,
									})}
									thumbnail={post.thumbnail.url}
									link={`/blog/posts/${post.slug}`}
								/>
							);
						})}
					</div>
				</Section>

				<Section background="greyBackground">
					<h2 className={styles.categoriesTitle}>Selecione as Categorias</h2>
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
				</Section>
			</main>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	await client.query(BlogDocument, {}).toPromise();

	return {
		props: {
			urqlState: ssrCache.extractData(),
		},
		revalidate: 60 * 60 * 8,
	};
};

