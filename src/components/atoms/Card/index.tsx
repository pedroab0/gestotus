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
	if (cardType === "LG") {
		return <CardLG {...props} />;
	} else if (cardType === "MD") {
		return <CardMD {...props} />;
	} else if (cardType === "SM") {
		return <CardSM {...props} />;
	} else {
		return <CardXS {...props} />;
	}
}
