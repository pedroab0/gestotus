import { FaWhatsapp } from "react-icons/fa";
import styles from "./styles.module.scss";
export function WhatsappWidget() {
	return (
		<a href="https://wa.me/5582996124520" className={styles.whatsapp}>
			<FaWhatsapp size="3em" color="#fff" />
		</a>
	);
}
