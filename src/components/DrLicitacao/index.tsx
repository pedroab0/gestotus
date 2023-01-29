import Image from "next/image";
import { Button } from "../atoms/Button";

import styles from "./styles.module.scss";

export const DrLicitacao = () => (
	<div className={styles.container}>
		<img alt="Dr Licitação" src="/doutor-licitacao.png" />
		<div className={styles.texts}>
			<h3>Posso te Ajudar ?</h3>
			<p>Procurando ajuda para achar a licitação ou serviço que precisa ?</p>
		</div>
		<Button label="Saiba Mais" buttonStyle="simple" link="/drlicitacao" />
	</div>
);

