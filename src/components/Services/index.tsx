import { Accordion, AccordionDetails, AccordionSummary, Typography } from "@mui/material";
import { MdExpandMore } from "react-icons/md";

import { Section } from "../atoms/Section";
import styles from "./styles.module.scss";

export function Services() {
	return (
		<Section title="Serviços" background="greyBackground">
			<div className={styles.container}>
				<div className={styles.box}>
					<h3>Gestão Pública</h3>
					<Accordion className={styles.accordion}>
						<AccordionSummary
							expandIcon={<MdExpandMore />}
							aria-controls="panel1a-content"
							id="panel1a-header"
							sx={{
								"& .MuiAccordionSummary-expandIconWrapper": {
									svg: {
										height: 30,
										width: 30,
									},
								},
							}}
						>
							<Typography className={styles.typography}>Assessoria</Typography>
						</AccordionSummary>
						<AccordionDetails className={styles.accordionDetails}>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
								malesuada lacus ex, sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>

				<div className={styles.box}>
					<h3>Gestão Empresarial</h3>
					<Accordion className={styles.accordion} disableGutters>
						<AccordionSummary
							expandIcon={<MdExpandMore />}
							aria-controls="panel2a-content"
							id="panel2a-header"
							sx={{
								"& .MuiAccordionSummary-expandIconWrapper": {
									svg: {
										height: 30,
										width: 30,
									},
								},
							}}
						>
							<Typography className={styles.typography}>
								Diagnósticos e Estratégias Empresariais
							</Typography>
						</AccordionSummary>
						<AccordionDetails className={styles.accordionDetails}>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
								malesuada lacus ex, sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>

					<Accordion className={styles.accordion} disableGutters>
						<AccordionSummary
							expandIcon={<MdExpandMore />}
							aria-controls="panel2a-content"
							id="panel3a-header"
							sx={{
								"& .MuiAccordionSummary-expandIconWrapper": {
									svg: {
										height: 30,
										width: 30,
									},
								},
							}}
						>
							<Typography className={styles.typography}>
								Organização, Desenvolvimento e Sustentabilidade
							</Typography>
						</AccordionSummary>
						<AccordionDetails className={styles.accordionDetails}>
							<Typography>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
								malesuada lacus ex, sit amet blandit leo lobortis eget.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
			</div>
		</Section>
	);
}
