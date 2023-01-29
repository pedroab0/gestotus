// dependencies
import { GetStaticProps } from "next";
import Image from "next/image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
SwiperCore.use([Autoplay, Pagination]);

// graphql
import { AboutDocument, useAboutQuery } from "../../generated/graphql";
import { client, ssrCache } from "../../lib/urql";

// components
import { Card } from "../../components/atoms/Card";
import { Section } from "../../components/atoms/Section";
import { Social } from "../../components/atoms/Social";

// styles
import styles from "./styles.module.scss";

export default function About() {
	const [{ data }] = useAboutQuery();

	if (!data) return;

	const { about, members } = data;
	return (
		<main>
			<Section background="greyBackground">
				<div className={styles.about}>
					<div className={styles.text}>
						<h3>QUEM SOMOS</h3>
						<p>{about?.text}</p>
						<Social justify="left" />
					</div>
					<div className={styles.image}>
						<Image
							src={about?.image.url || ''}
							alt="Membros da Gestotus"
							height={300}
							width={500}
						/>
					</div>
				</div>
			</Section>

			<Section background="greyBackground" title="Nossos Membros">
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
					autoplay={{
						delay: 2500,
						disableOnInteraction: false,
					}}
					breakpoints={{
						"768": {
							slidesPerView: 2,
							slidesPerGroup: 2,
							navigation: false,
						},
						"1024": {
							slidesPerView: 3,
							slidesPerGroup: 3,
							navigation: false,
						},
					}}
				>
					{members.map((member) => {
						return (
							<SwiperSlide key={member.id} className={styles.swiperSlide}>
								<Card
									key={member.id}
									cardType="SM"
									thumbnail={member.picture.url}
									name={member.name}
									role={member.role}
									description={member.description}
								/>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</Section>
		</main>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	await client.query(AboutDocument, {}).toPromise();

	return {
		props: {
			urqlState: ssrCache.extractData()
		},
		revalidate: 60 * 60 * 8,
	};
};
