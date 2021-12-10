import { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const Hamburger = () => {
	const [clicked, setClicked] = useState(false);

	return (
		<>
			<div className={styles.container}>
				<div
					className={styles.box}
					onClick={() => setClicked(clicked === false ? true : false)}
				>
					<div className={clicked === false ? styles.hamburger : styles.bar1} />
					<div className={clicked === false ? styles.hamburger : styles.bar2} />
					<div className={clicked === false ? styles.hamburger : styles.bar3} />
				</div>
			</div>

			<nav
				className={
					clicked === false ? styles.responsiveMenu : styles.responsiveMenuCollapsed
				}
			>
				<ul>
					<li>
						<Link href="/" passHref replace>
							<a>Home</a>
						</Link>
					</li>
					<li>
						<Link href="/#cursos" passHref replace scroll={false}>
							<a>Cursos</a>
						</Link>
					</li>
					<li>
						<Link href="/blog" passHref replace scroll={false}>
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
							<a>Sobre nós</a>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};
