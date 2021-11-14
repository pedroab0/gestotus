import { Button } from "../../Button";
import styles from "./styles.module.scss";

type CardMd = {
	thumbnail: string;
	title?: string;
	description?: string;
	link?: string;
	open?: boolean;
};

export function CardMD({ thumbnail, title, description, link, open }: CardMd) {
	return (
		<div className={styles.md}>
			<img src={thumbnail} alt="Curso fonte" />
			<div className={styles.texts}>
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
			<Button
				buttonStyle={open ? "wide" : "disabled"}
				label={open ? "Matrículas abertas" : "Matrículas Fechadas"}
				link={link}
			/>
		</div>
	);
}
