import { CardLG } from "./CardLg/index";
import { CardMD } from "./CardMd/index";
import { CardSM } from "./CardSm/index";
import { CardXS } from "./CardXs/index";

interface CardProps {
	cardType: "XS" | "SM" | "MD" | "LG";
	thumbnail: string;
	title?: string;
	description?: string;
	date?: string;
	author?: string;
	link?: string;
	open?: boolean;
	button?: boolean;
	name?: string;
	role?: string;
}

export const Card = ({ cardType, ...props }: CardProps) => {
	switch (cardType) {
		case "LG":
			return <CardLG {...props} />;
		case "MD":
			return <CardMD {...props} />;
		case "SM":
			return <CardSM {...props} />;
		default:
			return <CardXS {...props} />;
	}
};

