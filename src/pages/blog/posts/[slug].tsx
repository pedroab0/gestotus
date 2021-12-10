import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { GetStaticPaths } from "next";
import { api } from "../../../services/api";
import styles from "./styles.module.scss";

interface Post {
	id: string;
	title: string;
	description: string;
	date: string;
	autor: string;
	thumbnail: string;
	text: string;
}

interface PostProps {
	post: Post;
}

export default function Post({ post }: PostProps) {
	return (
		<>
			<main className={styles.postContainer}>
				<div className={styles.post}>
					<div style={{ position: "relative" }}>
						<div className={styles.dateTag}>
							<h4>{post.date}</h4>
						</div>
					</div>
					<img src={post.thumbnail} alt="Imagem ilustrativa" />
					<div style={{ position: "relative" }}>
						<div className={styles.title}>
							<h1>{post.title}</h1>
							<div className={styles.autor}>
								por <h5>{post.autor}</h5>
							</div>
						</div>
					</div>
					<div className={styles.text} dangerouslySetInnerHTML={{ __html: post.text }} />
				</div>
			</main>
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: [],
		fallback: "blocking",
	};
};

type Params = {
	params: {
		slug: string | string[];
	};
};

export const getStaticProps = async ({ params }: Params) => {
	const { slug } = params;

	const { data } = await api.get(`/articles/${slug}`);

	const post = {
		id: data.id,
		title: data.title,
		description: data.description,
		autor: data.autor,
		thumbnail: data.thumbnail,
		text: data.text,
		date: format(parseISO(data.date), "d MMM yy", {
			locale: ptBR,
		}),
	};

	return {
		props: {
			post,
		},
		revalidate: 60 * 60 * 24, // 24hrs
	};
};
