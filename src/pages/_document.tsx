/* eslint-disable */
/* tslint:disable */
import { useEffect, VoidFunctionComponent } from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { hotjar } from "react-hotjar";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="pt-br">
				<Head>
					<meta charSet="UTF-8" />
					<meta name="description" content="Gestotus Consultoria e Treinamentos" />
					<link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="true" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
						rel="stylesheet"
					/>
					<link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />

					{/* {(function (h, o, t, j, a, r) {
						h.hj =
							h.hj ||
							function () {
								(h.hj.q = h.hj.q || []).push(arguments);
							};
						h._hjSettings = { hjid: 2724893, hjsv: 6 };
						a = o.getElementsByTagName("head")[0];
						r = o.createElement("script");
						r.async = 1;
						r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
						a.appendChild(r);
					})(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=")} */}

					{useEffect(() => {
						hotjar.initialize(2724893, 6);
						// window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=";
					}, [])}
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
