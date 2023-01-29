// dependencies
import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { MdExpandMore } from "react-icons/md";

interface Service {
	id: string;
	title: string;
	description: string[];
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
					backgroundColor: "#f8f8f8",
					padding: "8px 16px 16px",
					fontFamily: "Montserrat, sans-serif",
				}}
			>
				<div>
					{description.map((text, i) => (
						<p key={`${id}-${i}`} style={{ margin: 0 }}>
							- {text}
						</p>
					))}
				</div>
			</AccordionDetails>
		</Accordion>
	);
};

