import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

import styles from "./styles.module.scss";

interface SocialProps {
	justify?: string;
}

export const Social = ({ justify }: SocialProps) => (
	<div className={styles.box} style={{ justifyContent: `${justify}` }}>
		<a href="https://www.facebook.com/gestotusconsultoria" target="_blank" rel="noreferrer">
			<p style={{ height: "0px", fontSize: "0px", margin: "0px" }}>facebook</p>
			<div className={styles.facebook}>
				<FaFacebookF />
			</div>
		</a>
		<a
			href="https://www.linkedin.com/company/gestotus-consultoria/"
			target="_blank"
			rel="noreferrer"
		>
			<p style={{ height: "0px", fontSize: "0px", margin: "0px" }}>linkedin</p>
			<div className={styles.linkedin}>
				<FaLinkedinIn />
			</div>
		</a>
		<a href="https://twitter.com/gestotus" target="_blank" rel="noreferrer">
			<p style={{ height: "0px", fontSize: "0px", margin: "0px" }}>twitter</p>
			<div className={styles.twitter}>
				<FaTwitter />
			</div>
		</a>
		<a href="https://www.instagram.com/gestotus/?hl=pt-br" target="_blank" rel="noreferrer">
			<p style={{ height: "0px", fontSize: "0px", margin: "0px" }}>instagram</p>
			<div className={styles.instagram}>
				<FaInstagram />
			</div>
		</a>
	</div>
);

