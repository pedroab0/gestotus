import Link from "next/link";
import styles from "./styles.module.scss";

interface ButtonProps {
	submit?: boolean;
	buttonStyle: string;
	label: string;
	link?: string;
}

export const Button = (props: ButtonProps) =>
	props.submit != true ? (
		<Link href={props.link || "#"} passHref>
			<a className={styles[props.buttonStyle]} rel="noreferrer">
				{props.label}
			</a>
		</Link>
	) : (
		<button type="submit" className={styles[props.buttonStyle]}>
			{props.label}
		</button>
	);
