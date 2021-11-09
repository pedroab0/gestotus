import { Button } from "../Button";
import styles from "./styles.module.scss";

interface CardProps {
	cardStyle: "xs" | "sm" | "md" | "lg";
	thumbnail: string;
	title?: string;
	description?: string;
	author?: string;
	link?: string;
	button?: boolean;
	date?: string;
	open?: boolean;
}

export function Card(props: CardProps) {
	return (
		<>
			{props.cardStyle !== "lg" ? (
				<div className={styles[props.cardStyle]}>
					<a href={props.link}>
						<img src={props.thumbnail} alt="Curso fonte" />
					</a>
					{props.title ? (
						<div className={styles.texts}>
							<h3>{props.title}</h3>
							<p>{props.description}</p>
						</div>
					) : (
						""
					)}
					{props.button ? (
						<Button
							buttonStyle={props.open ? "wide" : "disabled"}
							label={props.open ? "Matrículas abertas" : "Matrículas Fechadas"}
							link={props.link}
						/>
					) : (
						""
					)}
				</div>
			) : (
				<div className={styles[props.cardStyle]}>
					<a href={props.link}>
						<img src={props.thumbnail} alt="Curso fonte" />
						<div style={{ position: "relative" }}>
							<div className={styles.dateTag}>
								<h4>{props.date}</h4>
							</div>
						</div>
						<div className={styles.lgTexts}>
							<h3>{props.title}</h3>
							<p>{props.description}</p>
							<div>
								por <strong>{props.author}</strong>
							</div>
						</div>
					</a>
				</div>
			)}
		</>
	);
}
