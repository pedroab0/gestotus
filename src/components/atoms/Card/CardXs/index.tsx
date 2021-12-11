import Link from "next/link";

import styles from "./styles.module.scss";

interface CardXs {
	thumbnail: string;
	link?: string;
}

export const CardXS = ({ thumbnail, link }: CardXs) => (
	<div className={styles.xs}>
		<Link href={link || "#"} passHref>
			<a target="_blank" rel="noreferrer">
				<img src={thumbnail} alt="Curso fonte" />
			</a>
		</Link>
	</div>
);
