import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { MdExpandMore } from "react-icons/md";

interface Service {
	id: number;
	title: string;
	description: string;
}

export const Service = ({ id, title, description }: Service) => {
	return (
		<Accordion sx={{ boxShadow: "unset" }}>
			<AccordionSummary
				expandIcon={<MdExpandMore />}
				aria-controls={`panel${id}a-content`}
				id={`panel${id}a-header`}
				sx={{
					"& .MuiAccordionSummary-expandIconWrapper": {
						svg: {
							height: 30,
							width: 30,
						},
					},
				}}
			>
				<Typography
					sx={{
						fontFamily: "Montserrat, sans-serif",
						fontSize: 18,
						fontWeight: 600,
					}}
				>
					{title}
				</Typography>
			</AccordionSummary>
			<AccordionDetails
				sx={{
					backgroundColor: "#ecedec",
					padding: "8px 16px 16px",
					fontFamily: "Montserrat, sans-serif",
				}}
			>
				<Typography>
					<div dangerouslySetInnerHTML={{ __html: description }} />
				</Typography>
			</AccordionDetails>
		</Accordion>
	);
};
