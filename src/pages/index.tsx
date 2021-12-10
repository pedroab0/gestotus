import type { GetStaticProps } from "next";
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
SwiperCore.use([Autoplay, Pagination]);

import { DrLicitacao } from "../components/DrLicitacao";
import { Service } from "../components/Service";
import { Card } from "../components/atoms/Card";
import { Section } from "../components/atoms/Section";
import { api } from "../services/api";
import { Banner } from "../components/Banner";

import styles from "./home.module.scss";

interface Service {
	id: number;
	value: string;
	title: string;
	description: string;
}

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
}

interface Parceiros {
	id: string;
	thumbnail: string;
	link: string;
}

interface HomeProps {
	services: Service[];
	courses: Course[];
	posts: Post[];
	parceiros: Parceiros[];
}

export default function Home({ courses, posts, parceiros, services }: HomeProps) {
	console.log(services);
	return (
		<>
			<Banner />

			<Section title="Serviços" background="greyBackground">
				<div className={styles.servicesContainer}>
					<div className={styles.servicesBox}>
						<h3>Gestão Pública</h3>
						{services.map((service) => {
							return service.value === "gestao-publica" ? (
								<Service
									key={service.id}
									id={service.id}
									title={service.title}
									description={service.description}
								/>
							) : null;
						})}
					</div>

					<div className={styles.servicesBox}>
						<h3>Gestão Empresarial</h3>
						{services.map((service) => {
							return service.value === "gestao-empresarial" ? (
								<Service
									key={service.id}
									id={service.id}
									title={service.title}
									description={service.description}
								/>
							) : null;
						})}
					</div>
				</div>
			</Section>

			<DrLicitacao />
			<main>
				{courses.length > 0 ? (
					<Section title="Cursos" background="greyBackground" id="cursos">
						<div className={styles.courses}>
							{courses.map((course) => {
								return (
									<Card
										cardType="MD"
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
				) : null}

				{posts.length > 0 ? (
					<Section title="Blog" background="greyBackground" link="/blog" button>
						<div className={styles.posts}>
							{posts.map((post) => {
								return (
									<Card
										cardType="LG"
										key={post.id}
										title={post.title}
										description={post.description}
										author={post.autor}
										date={post.date}
										thumbnail={post.thumbnail}
										link={`/blog/posts/${post.id}`}
									/>
								);
							})}
						</div>
					</Section>
				) : null}

				{parceiros.length > 0 ? (
					<Section title="Parceiros" background="whiteBackground">
						<Swiper
							className={styles.swiperContainer}
							slidesPerView={1}
							slidesPerGroup={1}
							spaceBetween={0}
							watchSlidesProgress={true}
							pagination={{
								clickable: true,
							}}
							centeredSlides={false}
							loop={true}
							autoplay={{
								delay: 2500,
								disableOnInteraction: false,
							}}
							breakpoints={{
								"768": {
									slidesPerView: 3,
									slidesPerGroup: 3,
									spaceBetween: 24,
									navigation: false,
								},
							}}
						>
							{parceiros.map((parceiro) => {
								return (
									<SwiperSlide key={parceiro.id} className={styles.swiperSlide}>
										<Card
											cardType="XS"
											link={parceiro.link}
											thumbnail={parceiro.thumbnail}
										/>
									</SwiperSlide>
								);
							})}
						</Swiper>
					</Section>
				) : null}
			</main>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await api.get("home");

	const services = data.services.map((service: Service) => {
		return {
			id: service.id,
			value: service.value,
			title: service.title,
			description: service.description,
		};
	});

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
			services: services,
			courses: courses,
			posts: posts,
			parceiros: parceiros,
		},
		revalidate: 60 * 60 * 8,
	};
};
