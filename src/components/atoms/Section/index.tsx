import { ReactNode } from "react";
import { Button } from "../Button";
import styles from "./styles.module.scss";

interface SectionProps {
	title: string;
	subtitle?: string;
	button?: boolean;
	children?: ReactNode;
	background: string;
}

export function Section(props: SectionProps) {
	return (
		<section className={styles[props.background]}>
			<h2>{props.title}</h2>
			{!props.subtitle ? "" : <p>{props.subtitle}</p>}
			{props.children}
			{props.button ? <Button buttonStyle="simple" label="Saiba mais" /> : ""}
		</section>
	);
}
