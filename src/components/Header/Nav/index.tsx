import Link from "next/link";

import styles from "./styles.module.scss";

export const Nav = () => (
	<nav className={styles.menu}>
		<ul>
			<li>
				<Link href="/" passHref replace>
					<a>Home</a>
				</Link>
			</li>
			<li>
				<Link href="/#cursos" passHref scroll={false} replace>
					<a>Cursos</a>
				</Link>
			</li>
			<li>
				<Link href="/blog" passHref scroll={false} replace>
					<a>Blog</a>
				</Link>
			</li>
			<li>
				<Link href="/drlicitacao" passHref replace>
					<a>Dr. Licitação</a>
				</Link>
			</li>
			<li>
				<Link href="/about" passHref replace>
					<a>Sobre Nós</a>
				</Link>
			</li>
		</ul>
	</nav>
);
