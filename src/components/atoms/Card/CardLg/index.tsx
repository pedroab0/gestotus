import styles from "./styles.module.scss";

export type CardLg = {
	thumbnail: string;
	date?: string;
	title?: string;
	description?: string;
	author?: string;
	link?: string;
};

export const CardLG = ({ thumbnail, date, title, description, author, link }: CardLg) =>
	<div className={styles.lg}>
		<a href={link}>
			<img src={thumbnail} alt="Curso fonte" />
			<div style={{ position: "relative" }}>
				<div className={styles.dateTag}>
					<h4>{date}</h4>
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
	</div>
