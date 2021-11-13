import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import styles from "./styles.module.scss";

interface SocialProps {
	justify?: string;
}

export function Social({ justify }: SocialProps) {
	return (
		<div className={styles.box} style={{ justifyContent: `${justify}` }}>
			<a href="https://www.facebook.com/gestotusconsultoria">
				<div className={styles.facebook}>
					<FaFacebookF />
				</div>
			</a>
			<a href="https://www.linkedin.com/company/gestotus-consultoria/">
				<div className={styles.linkedin}>
					<FaLinkedinIn />
				</div>
			</a>
			<a href="https://twitter.com/gestotus">
				<div className={styles.twitter}>
					<FaTwitter />
				</div>
			</a>
			<a href="https://www.instagram.com/gestotus/?hl=pt-br">
				<div className={styles.instagram}>
					<FaInstagram />
				</div>
			</a>
		</div>
	);
}
