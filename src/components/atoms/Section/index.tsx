import { ReactNode } from "react";
import { Button } from "../Button";
import styles from "./styles.module.scss";

interface SectionProps {
	id?: string;
	title?: string;
	subtitle?: string;
	button?: boolean;
	children?: ReactNode;
	background: string;
	link?: string;
}

export const Section = (props: SectionProps) => (
	<section className={styles[props.background]} id={props.id}>
		{props.title ? <h2>{props.title}</h2> : ""}
		{!props.subtitle ? "" : <p>{props.subtitle}</p>}
		{props.children}
		{props.button ? <Button link={props.link} buttonStyle="simple" label="Saiba mais" /> : null}
	</section>
);
