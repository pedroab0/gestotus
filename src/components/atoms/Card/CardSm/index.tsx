import styles from "./styles.module.scss";

interface CardSm {
	thumbnail: string;
	description?: string;
	name?: string;
	role?: string;
}

export function CardSM({ thumbnail, description, name, role }: CardSm) {
	return (
		<div className={styles.sm}>
			<img src={thumbnail} alt="Curso fonte" />
			<div style={{ position: "relative" }}>
				<div className={styles.nameTag}>
					<h4>{name}</h4>
					<h5>{role}</h5>
				</div>
			</div>
			<div className={styles.text}>
				<p>{description}</p>
			</div>
		</div>
	);
}
