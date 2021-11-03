import Image from "next/image";
import {
	FaFacebookF,
	FaLinkedinIn,
	FaTwitter,
	FaInstagram,
	FaPhoneAlt,
	FaEnvelope,
	FaMapMarkerAlt,
} from "react-icons/fa";

import { Button } from "../atoms/Button";
import styles from "./styles.module.scss";

export function Footer() {
	return (
		<div className={styles.container}>
			<div className={styles.logo}>
				<Image src="/logo-transparent.png" height={75} width={230} alt="Gestotus" />

				<p>Gestotus, inovação e inspiração !</p>

				<div className={styles.box}>
					<a href="#">
						<div className={styles.facebook}>
							<FaFacebookF />
						</div>
					</a>
					<a href="#">
						<div className={styles.linkedin}>
							<FaLinkedinIn />
						</div>
					</a>
					<a href="#">
						<div className={styles.twitter}>
							<FaTwitter />
						</div>
					</a>
					<a href="#">
						<div className={styles.instagram}>
							<FaInstagram />
						</div>
					</a>
				</div>
			</div>

			<div className={styles.contact}>
				<p>Informações para contato</p>

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
			</div>

			<div className={styles.form}>
				<form action="submit">
					<p>Envie-nos um email</p>
					<div className={styles.input}>
						<input type="email" placeholder="Seu email" />
						<input type="text" placeholder="Assunto" />
						<textarea name="message" cols={30} rows={4} placeholder="Sua mensagem" />
					</div>
					<Button style="submit" submit label="Enviar" />
				</form>
			</div>
		</div>
	);
}
