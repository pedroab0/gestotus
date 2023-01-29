// dependencies
import type { GetStaticProps } from "next";
import { format, parseISO } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
SwiperCore.use([Autoplay, Pagination]);

// graphql
import { useHomeQuery, HomeDocument } from "../generated/graphql";
import { client, ssrCache } from "../lib/urql";

// components
import { DrLicitacao } from "../components/DrLicitacao";
import { Service } from "../components/Service";
import { Card } from "../components/atoms/Card";
import { Section } from "../components/atoms/Section";
import { Banner } from "../components/Banner";

// styles
import styles from "./home.module.scss";

export default function Home() {
	const [{ data }] = useHomeQuery();

	return (
		<>
			<Banner />

			<Section title="Serviços" background="greyBackground">
				<div className={styles.servicesContainer}>
					<div className={styles.servicesBox}>
						<h3>Gestão Pública</h3>
						{data?.services.map((service) => {
							return (
								service.type === "PUBLIC" && (
									<Service
										key={service.id}
										id={service.id}
										title={service.title}
										description={service.description}
									/>
								)
							);
						})}
					</div>

					<div className={styles.servicesBox}>
						<h3>Gestão Empresarial</h3>
						{data?.services.map((service) => {
							return (
								service.type === "PRIVATE" && (
									<Service
										key={service.id}
										id={service.id}
										title={service.title}
										description={service.description}
									/>
								)
							);
						})}
					</div>
				</div>
			</Section>

			<DrLicitacao />
			<main>
				{data?.courses !== undefined && data?.courses.length > 0 && (
					<Section title="Cursos" background="greyBackground" id="cursos">
						<div className={styles.courses}>
							{data?.courses?.map((course) => {
								return (
									<Card
										cardType="MD"
										key={course.id}
										title={course.title}
										description={course.description}
										thumbnail={course.thumbnail.url}
										open={course.isAvailable}
										button
										link={course.url}
									/>
								);
							})}
						</div>
					</Section>
				)}

				{data?.posts !== undefined && data?.posts?.length > 0 && (
					<Section
						title="Blog"
						background="lightBackground"
						link="/blog"
						button
					>
						<div className={styles.posts}>
							{data?.posts.map((post) => {
								return (
									<Card
										cardType="LG"
										key={post.id}
										title={post.title}
										description={post.description}
										author={post.author}
										date={format(parseISO(post.date), "d MMM yy", {
											locale: ptBR,
										})}
										thumbnail={post.thumbnail.url}
										link={`/blog/posts/${post.slug}`}
									/>
								);
							})}
						</div>
					</Section>
				)}

				{data?.partnerCompanies !== undefined &&
					data?.partnerCompanies?.length > 0 && (
						<Section title="Parceiros" background="greyBackground">
							<Swiper
								className={styles?.swiperContainer}
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
								{data?.partnerCompanies?.map((partner) => {
									return (
										<SwiperSlide
											key={partner?.id}
											className={styles?.swiperSlide}
										>
											<Card
												cardType="XS"
												link={partner?.url}
												thumbnail={partner?.thumbnail?.url}
											/>
										</SwiperSlide>
									);
								})}
							</Swiper>
						</Section>
					)}
			</main>
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	await client.query(HomeDocument, {}).toPromise();

	return {
		props: {
			urqlState: ssrCache.extractData(),
		},
		revalidate: 60 * 60 * 8,
	};
};

