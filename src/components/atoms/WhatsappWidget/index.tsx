import { FaWhatsapp } from "react-icons/fa";

import styles from "./styles.module.scss";

export const WhatsappWidget = () => {
	return (
		<a href="https://wa.me/5582996124520" className={styles.whatsapp}>
			<p style={{ height: "0px", fontSize: "0px", margin: "0px" }}>whatsapp</p>
			<FaWhatsapp size="3em" color="#fff" />
		</a>
	);
};

