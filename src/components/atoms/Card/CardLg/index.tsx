import Link from "next/link";
import styles from "./styles.module.scss";

export type CardLg = {
	thumbnail: string;
	date?: string;
	title?: string;
	description?: string;
	author?: string;
	link?: string;
};

export const CardLG = ({ thumbnail, date, title, description, author, link }: CardLg) => (
	<div className={styles.lg}>
		<Link href={link || "#"} passHref>
			<a>
				<img src={thumbnail} alt="Curso fonte" />
				<div style={{ position: "relative" }}>
					<div className={styles.dateTag}>
						<h3>{date}</h3>
					</div>
				</div>
				<div className={styles.lgTexts}>
					<h3>{title}</h3>
					<p>{description}</p>
					<div>
						por <strong>{author}</strong>
					</div>
				</div>
			</a>
		</Link>
	</div>
);
