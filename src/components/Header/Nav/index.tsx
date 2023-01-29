import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./styles.module.scss";

export const Nav = () => {
	const router = useRouter();

	return (
		<nav className={styles.menu}>
			<ul>
				<li>
					<Link href="/" passHref replace>
						<a className={router.pathname === "/" ? styles.active : ""}>Home</a>
					</Link>
				</li>
				<li>
					<Link href="/#cursos" passHref scroll={false} replace>
						<a className={router.pathname === "/#cursos" ? styles.active : ""}>
							Cursos
						</a>
					</Link>
				</li>
				<li>
					<Link href="/blog" passHref scroll={false} replace>
						<a className={router.pathname === "/blog" ? styles.active : ""}>Blog</a>
					</Link>
				</li>
				<li>
					<Link href="/drlicitacao" passHref replace>
						<a className={router.pathname === "/drlicitacao" ? styles.active : ""}>
							Dr. Licitação
						</a>
					</Link>
				</li>
				<li>
					<Link href="/about" passHref replace>
						<a className={router.pathname === "/about-us" ? styles.active : ""}>
							Sobre Nós
						</a>
					</Link>
				</li>
			</ul>
		</nav>
	);
};
