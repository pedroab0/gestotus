import Link from "next/link";

import styles from "./styles.module.scss";

export const Nav = () => (
	<nav className={styles.menu}>
		<ul>
			<li>
				<Link href="/">
					<a>Home</a>
				</Link>
			</li>
			<li>
				<a href="#">Cursos</a>
			</li>
			<li>
				<Link href="/blog">
					<a>Blog</a>
				</Link>
			</li>
			<li>
				<Link href="/drlicitacao">
					<a>Dr. Licitação</a>
				</Link>
			</li>
			<li>
				<Link href="/about">
					<a>Sobre Nós</a>
				</Link>
			</li>
		</ul>
	</nav>
);
