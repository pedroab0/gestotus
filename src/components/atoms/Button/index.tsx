import styles from "./styles.module.scss";

interface ButtonProps {
	submit?: boolean;
	buttonStyle: string;
	label: string;
	link?: string;
}

export const Button = (props: ButtonProps) =>
	props.submit != true ?
		<a href={props.link} className={styles[props.buttonStyle]}>
			{props.label}
		</a>
		:
		<button type="submit" className={styles[props.buttonStyle]}>
			{props.label}
		</button>
