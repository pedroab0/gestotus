import Image from "next/image";
import banner from "../../../public/banner.jpg";
import styles from "./styles.module.scss";

export const Banner = () =>
	<div id="home" className={styles.container}>
		<Image
			priority
			layout="responsive"
			objectFit="cover"
			src={banner}
			alt="Gestotus consultoria e treinamentos. Gestão; Inovação; Inspiração"
		/>
	</div>