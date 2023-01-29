import Link from "next/link";
import styles from "./styles.module.scss";

interface ButtonProps {
	submit?: boolean;
	buttonStyle: string;
	label: string;
	link?: string;
}

export const Button = ({ buttonStyle, label, link, submit }: ButtonProps) =>
	submit != true ? (
		<Link href={link || "#"} passHref>
			<a className={styles[buttonStyle]} rel="noreferrer">
				{label}
			</a>
		</Link>
	) : (
		<button type="submit" className={styles[buttonStyle]}>
			{label}
		</button>
	);

