import styles from "./styles.module.scss";

interface CardXs {
	thumbnail: string;
	link?: string;
}

export function CardXS({ thumbnail, link }: CardXs) {
	return (
		<div className={styles.xs}>
			<a href={link}>
				<img src={thumbnail} alt="Curso fonte" />
			</a>
		</div>
	);
}
