import Image from "next/image";
import { Hamburger } from "./Hamburger";
import { Nav } from "./Nav";
import styles from "./styles.module.scss";

export function Header() {
	return (
		<header className={styles.container}>
			<div className={styles.box}>
				<Image
					className={styles.logo}
					src="/logo-transparent.png"
					alt="Gestotus logo"
					layout="fixed"
					width={165}
					height={54}
				/>
				<Hamburger />

				<Nav />
			</div>
		</header>
	);
}
