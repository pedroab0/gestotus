import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="pt-br">
				<Head>
					<meta charSet="UTF-8" />
					<meta name="description" content="Gestotus Consultoria e Treinamentos" />
					<link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
					<link
						href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
						rel="stylesheet"
					/>
					<link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

