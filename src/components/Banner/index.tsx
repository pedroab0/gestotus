import styles from "./styles.module.scss";

export function Banner() {
	return (
		<div id="home" className={styles.container}>
			<img
				src="/banner.jpg"
				alt="Gestotus consultoria e treinamentos. Gestão; Inovação; Inspiração"
			/>
		</div>
	);
}
