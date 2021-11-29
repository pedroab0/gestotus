import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

export const CookiesWidget = () => {
	const [cookiesAgree, setCookiesAgree] = useState<string | null>("false");

	useEffect(() => {
		if (!localStorage.getItem("cookiesAgree")) {
			localStorage.setItem("cookiesAgree", "false");
		}

		setCookiesAgree(localStorage.getItem("cookiesAgree"));
	}, []);

	function handleClick() {
		localStorage.setItem("cookiesAgree", "true");
		setCookiesAgree("true");
	}

	return cookiesAgree !== "true" ? (
		<div className={styles.container}>
			<div className={styles.box}>
				<p className={styles.text}>
					Utilizamos cookies próprios e de terceiros para melhorar a sua experiência e os
					nossos serviços, analisando a navegação de nosso site. Ao continuar a navegação,
					consideramos que você aceita a sua utilização.
				</p>
				<button onClick={() => handleClick()} className={styles.button}>
					Concordar e fechar
				</button>
			</div>
		</div>
	) : null;
};
