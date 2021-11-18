import { useState } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export function Hamburger() {
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
		</>
	);
}
