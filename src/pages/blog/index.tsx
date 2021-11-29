import { GetServerSideProps } from "next";
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Card } from "../../components/atoms/Card";
import { Section } from "../../components/atoms/Section";
import { Banner } from "../../components/Banner";
import { api } from "../../services/api";

import styles from "./styles.module.scss";

interface Post {
	id: string;
	title: string;
	description: string;
	date: string;
	autor: string;
	thumbnail: string;
}

interface BlogProps {
	posts: Post[];
}

export default function Blog({ posts }: BlogProps) {
	return (
		<>
			<Banner />

			<main>
				<Section background="greyBackground">
					<div className={styles.posts}>
						{posts.map((post) => {
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
			</main>
		</>
	);
}

export const getServerSideProps: GetServerSideProps = async () => {
	const { data } = await api.get("blog");

	const posts = data.map((post: Post) => {
		return {
			id: post.id,
			title: post.title,
			description: post.description,
			autor: post.autor,
			thumbnail: post.thumbnail,
			date: format(parseISO(post.date), "d MMM yy", {
				locale: ptBR,
			}),
		};
	});

	return {
		props: {
			posts: posts,
		},
	};
};
