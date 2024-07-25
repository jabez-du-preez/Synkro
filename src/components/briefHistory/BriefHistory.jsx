import React from "react";
import { StyledBriefHistory } from "./styles";
import Container from "../container/Container";
import Button from "../button/Button";
import Section from "../section/Section";

const BriefHistory = () => {
	return (
		<Section id="about">
			<StyledBriefHistory>
				<Container className={"brief-history-container"}>
					<h2 className="section-title">What we do</h2>
					<h5 className="section-body">
						Pelvic health is crucial for overall well-being, but many people
						struggle with pelvic floor issues. Kegel chair therapy is a
						powerful, non-invasive solution to these problems. This innovative
						treatment strengthens the pelvic floor muscles effectively and
						conveniently.
					</h5>
					<Button text="Book Now" className={"brief-history-button"} />
				</Container>
			</StyledBriefHistory>
		</Section>
	);
};

export default BriefHistory;
