import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
				<title>Gestotus</title>
			</Head>
			<Header />
			<Component {...pageProps} />
			<Footer />
		</>
	);
}

export default MyApp;
