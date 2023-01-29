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

export const Section = ({
	background,
	button,
	children,
	id,
	link,
	subtitle,
	title,
}: SectionProps) => (
	<section className={styles[background]} id={id}>
		{title && <h2>{title}</h2>}
		{!subtitle && <p>{subtitle}</p>}
		{children}
		{button && <Button link={link} buttonStyle="simple" label="Saiba mais" />}
	</section>
);

