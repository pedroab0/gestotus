import Image from "next/image";
import Link from "next/link";
import { Hamburger } from "./Hamburger";
import { Nav } from "./Nav";
import styles from "./styles.module.scss";

export const Header = () => (
	<header className={styles.container}>
		<div className={styles.box}>
			<Link href="/" scroll={false} passHref>
				<a>
					<Image
						className={styles.logo}
						src="/logo-transparent.png"
						alt="Gestotus logo"
						layout="fixed"
						width={165}
						height={54}
					/>
				</a>
			</Link>
			<Hamburger />

			<Nav />
		</div>
	</header>
);
