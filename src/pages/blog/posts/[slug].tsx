// dependencies
import { GetStaticPaths } from "next";
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

// graphql
import { PostDocument, usePostQuery } from "../../../generated/graphql";
import { client, ssrCache } from "../../../lib/urql";

// styles
import styles from "./styles.module.scss";

interface PostProps {
	slug: string;
}

export default function Post({ slug }: PostProps) {
	const [{ data }] = usePostQuery({
		variables: {
			slug: slug,
		},
	});

	if (!data) return <></>;
	const { post } = data;

	return (
		<>
			<main className={styles.postContainer}>
				<div className={styles.post}>
					<div style={{ position: "relative" }}>
						<div className={styles.dateTag}>
							<h4>
								{format(parseISO(post?.date), "d MMM yy", {
									locale: ptBR,
								})}
							</h4>
						</div>
					</div>
					<img src={post?.thumbnail.url} alt="Imagem ilustrativa" />
					<div style={{ position: "relative" }}>
						<div className={styles.title}>
							<h1>{post?.title}</h1>
							<div className={styles.autor}>
								por <h5>{post?.author}</h5>
							</div>
						</div>
					</div>
					<div
						className={styles.text}
						dangerouslySetInnerHTML={{ __html: post?.content.html || "" }}
					/>
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

	await client.query(PostDocument, { slug: slug }).toPromise();

	return {
		props: {
			urqlState: ssrCache.extractData(),
			slug,
		},
		revalidate: 60 * 60 * 24, // 24hrs
	};
};

