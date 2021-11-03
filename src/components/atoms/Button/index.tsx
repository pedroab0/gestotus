import styles from "./styles.module.scss";

interface ButtonProps {
	submit?: boolean;
	style: string;
	label: string;
	link?: string;
}

export function Button(props: ButtonProps) {
	return props.submit != true ? (
		<a href={props.link} className={styles[props.style]}>
			{props.label}
		</a>
	) : (
		<button type="submit" className={styles[props.style]}>
			{props.label}
		</button>
	);
}
