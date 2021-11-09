import type { NextPage, GetStaticProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import SwiperCore, { Autoplay, Pagination } from "swiper";
SwiperCore.use([Autoplay, Pagination]);

import { Footer } from "../components/Footer";
import { DrLicitacao } from "../components/DrLicitacao";
import { Services } from "../components/Services";
import { Card } from "../components/atoms/Card";
import { Section } from "../components/atoms/Section";
import { Header } from "../components/Header";
import { api } from "../services/api";

import styles from "./home.module.scss";

interface Course {
	id: string;
	title: string;
	description: string;
	open: boolean;
	thumbnail: string;
	link: string;
}
interface Post {
	id: string;
	title: string;
	description: string;
	date: string;
	autor: string;
	thumbnail: string;
	link: string;
}

interface Parceiros {
	id: string;
	thumbnail: string;
	link: string;
}

interface HomeProps {
	courses: Course[];
	posts: Post[];
	parceiros: Parceiros[];
}

export default function Home({ courses, posts, parceiros }: HomeProps) {
	return (
		<>
			<Header />
			<Services />
			<DrLicitacao />
			<main>
				<Section title="Cursos" button background="greyBackground">
					<div className={styles.courses}>
						{courses.map((course) => {
							return (
								<Card
									cardStyle="md"
									key={course.id}
									title={course.title}
									description={course.description}
									thumbnail={course.thumbnail}
									open={course.open}
									button
									link={course.link}
								/>
							);
						})}
					</div>
				</Section>

				<Section title="Blog" background="greyBackground" button>
					<div className={styles.posts}>
						{posts.map((post) => {
							return (
								<Card
									cardStyle="lg"
									key={post.id}
									title={post.title}
									description={post.description}
									author={post.autor}
									date={post.date}
									thumbnail={post.thumbnail}
									link={post.link}
								/>
							);
						})}
					</div>
				</Section>

				<Section title="Parceiros" background="whiteBackground">
					<Swiper
						className={styles.swipperContainer}
						slidesPerView={1}
						spaceBetween={0}
						watchSlidesProgress={true}
						pagination={{
							clickable: true,
						}}
						centeredSlides={true}
						loop={true}
						onSlideChange={() => console.log("slide change")}
						onSwiper={(swiper) => console.log(swiper)}
						autoplay={{
							delay: 2500,
							disableOnInteraction: false,
						}}
						breakpoints={{
							"768": {
								slidesPerView: 3,
								spaceBetween: 24,
								navigation: false,
							},
						}}
					>
						{parceiros.map((parceiro) => {
							return (
								<SwiperSlide key={parceiro.id} className={styles.swiperSlide}>
									<Card
										cardStyle="xs"
										link={parceiro.link}
										thumbnail={parceiro.thumbnail}
									/>
								</SwiperSlide>
							);
						})}
					</Swiper>
				</Section>
			</main>
			<Footer />
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await api.get("home");

	const courses = data.cursos.map((course: Course) => {
		return {
			id: course.id,
			title: course.title,
			description: course.description,
			open: course.open,
			thumbnail: course.thumbnail,
			link: course.link,
		};
	});

	const posts = data.posts.map((post: Post) => {
		return {
			id: post.id,
			title: post.title,
			description: post.description,
			autor: post.autor,
			link: post.link,
			thumbnail: post.thumbnail,
			date: format(parseISO(post.date), "d MMM yy", {
				locale: ptBR,
			}),
		};
	});

	const parceiros = data.parceiros.map((parceiros: Parceiros) => {
		return {
			id: parceiros.id,
			thumbnail: parceiros.thumbnail,
			link: parceiros.link,
		};
	});

	return {
		props: {
			courses,
			posts,
			parceiros,
		},
		revalidate: 60 * 60 * 12,
	};
};
