import { Button } from "../../Button";
import styles from "./styles.module.scss";

type CardMd = {
	thumbnail: string;
	title?: string;
	description?: string;
	link?: string;
	open?: boolean;
};

export const CardMD = ({ thumbnail, title, description, link, open }: CardMd) => (
	<div className={styles.md}>
		<img src={thumbnail} alt="Curso fonte" />
		<div className={styles.text}>
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
		<Button
			buttonStyle={open ? "wide" : "disabled"}
			label={open ? "Matrículas abertas" : "Matrículas fechadas"}
			link={link}
		/>
	</div>
);
