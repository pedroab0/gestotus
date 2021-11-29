import type { AppProps } from "next/app";
import Head from "next/head";

// Swiper
import "swiper/scss";
import "swiper/scss/pagination";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { WhatsappWidget } from "../components/atoms/WhatsappWidget";
import { CookiesWidget } from "../components/CookiesWidget";

import "../styles/globals.scss";
import styles from "../styles/app.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Gestotus</title>
			</Head>
			<div className={styles.appContainer}>
				<Header />
				<Component {...pageProps} />
				<Footer />
				<CookiesWidget />
				<WhatsappWidget />
			</div>
		</>
	);
}

export default MyApp;
