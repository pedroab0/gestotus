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
							<a>Sobre nós</a>
						</Link>
					</li>
				</ul>
			</nav>
		</>
	);
};
