import { GetStaticProps } from "next";
import Image from "next/image";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination } from "swiper";
SwiperCore.use([Autoplay, Pagination]);

import { Card } from "../../components/atoms/Card";
import { Section } from "../../components/atoms/Section";
import { Social } from "../../components/atoms/Social";
import { api } from "../../services/api";

import styles from "./styles.module.scss";

interface About {
	text: string;
	image: string;
}

interface Member {
	id: number;
	name: string;
	role: string;
	description: string;
	thumbnail: string;
}

interface AboutProps {
	about: About;
	members: Member[];
}

export default function About({ about, members }: AboutProps) {
	return (
		<main>
			<Section background="greyBackground">
				<div className={styles.about}>
					<div className={styles.text}>
						<h3>QUEM SOMOS</h3>
						<p>{about.text}</p>
						<Social justify="left" />
					</div>
					<div className={styles.image}>
						<Image
							src={about.image}
							alt="Membros da Gestotus"
							height={300}
							width={500}
						/>
					</div>
				</div>
			</Section>

			<Section background="whiteBackground" title="Nossos Membros">
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
									thumbnail={member.thumbnail}
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
	const { data } = await api.get("about");

	const about: About = data.about;

	const members = data.members.map((member: Member) => {
		return {
			id: member.id,
			name: member.name,
			role: member.role,
			description: member.description,
			thumbnail: member.thumbnail,
		};
	});

	return {
		props: {
			about,
			members: members,
		},
		revalidate: 60 * 60 * 8,
	};
};
