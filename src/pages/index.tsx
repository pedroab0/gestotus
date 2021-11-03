import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/app.module.scss";

import { Footer } from "../components/Footer";

const Home: NextPage = () => {
	return (
		<>
			<h1>Hello World</h1>
			<Footer />
		</>
	);
};

export default Home;
