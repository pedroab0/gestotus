import styles from "./styles.module.scss";

interface ButtonProps {
	submit?: boolean;
	buttonStyle: string;
	label: string;
	link?: string;
}

export function Button(props: ButtonProps) {
	return props.submit != true ? (
		<a href={props.link} className={styles[props.buttonStyle]}>
			{props.label}
		</a>
	) : (
		<button type="submit" className={styles[props.buttonStyle]}>
			{props.label}
		</button>
	);
}
