// dependencies
import { useEffect } from "react";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "urql";
import { hotjar } from "react-hotjar";

// Swiper
import "swiper/scss";
import "swiper/scss/pagination";

// graphql
import { client, ssrCache } from "../lib/urql";

// components
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { WhatsappWidget } from "../components/atoms/WhatsappWidget";
import { CookiesWidget } from "../components/CookiesWidget";

// styles
import "../styles/globals.scss";
import styles from "../styles/app.module.scss";

function MyApp({ Component, pageProps }: AppProps) {
	if (pageProps.urqlState) {
		ssrCache.restoreData(pageProps.urqlState);
	}

	return (
		<Provider value={client}>
			<>
				<Head>
					<>
						<meta name="viewport" content="width=device-width, initial-scale=1.0" />
						<title>Gestotus</title>
						{useEffect(() => {
							hotjar.initialize(2724893, 6);
						}, [])}
					</>
				</Head>
				<div className={styles.appContainer}>
					<Header />
					<Component {...pageProps} />
					<Footer />
					<CookiesWidget />
					<WhatsappWidget />
				</div>
			</>
		</Provider>
	);
}

export default MyApp;

