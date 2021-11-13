import Image from "next/image";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

import { Button } from "../atoms/Button";
import { Social } from "../atoms/Social";
import styles from "./styles.module.scss";

export function Footer() {
	return (
		<footer className={styles.container}>
			<div className={styles.logo}>
				<Image src="/logo-transparent.png" height={75} width={230} alt="Gestotus" />

				<p>Gestotus, inovação e inspiração !</p>

				<Social />
			</div>

			<div className={styles.contact}>
				<p>Informações para contato</p>

				<ul>
					<li>
						<FaPhoneAlt />
						<span>(82)9.9690-4908</span>
					</li>
					<li>
						<FaEnvelope />
						<span>gestotusconsultoria@gmail.com</span>
					</li>
					<li>
						<FaMapMarkerAlt />
						<span>Maceió-Al, Brasil</span>
					</li>
				</ul>
			</div>

			<div className={styles.form}>
				<form action="submit">
					<p>Envie-nos um email</p>
					<div className={styles.input}>
						<input type="email" placeholder="Seu email" />
						<input type="text" placeholder="Assunto" />
						<textarea name="message" cols={30} rows={4} placeholder="Sua mensagem" />
					</div>
					<Button buttonStyle="submit" submit label="Enviar" />
				</form>
			</div>
		</footer>
	);
}
