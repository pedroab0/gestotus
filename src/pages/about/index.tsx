import { GetStaticProps } from "next";
import Image from "next/image";

import { Section } from "../../components/atoms/Section";
import { api } from "../../services/api";

import styles from "./styles.module.scss";

interface About {
	text: string;
	image: string;
}

interface Member {
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
		</main>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const { data } = await api.get("about");

	const about: About = data.about;

	const members = data.members.map((member: Member) => {
		return {
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
