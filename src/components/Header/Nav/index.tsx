import Link from "next/link";

import styles from "./styles.module.scss";

export function Nav() {
	return (
		<nav className={styles.menu}>
			<ul>
				<li>
					<Link href="/">Home</Link>
				</li>
				<li>
					<a href="#">Cursos</a>
				</li>
				<li>
					<a href="#">Blog</a>
				</li>
				<li>
					<Link href="/drlicitacao">Dr. Licitação</Link>
				</li>
				<li>
					<Link href="/about">Sobre nós</Link>
				</li>
			</ul>
		</nav>
	);
}
