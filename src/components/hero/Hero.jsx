import React from "react";
import { StyledHero } from "./styles";
import Button from "../button/Button";
import Section from "../section/Section";
import { scrollTo } from "../../helpers";

const Hero = () => {
	return (
		<Section id="top">
			<StyledHero>
				<h1 className="hero-title">Synkro Health</h1>
				<h4 className="hero-subtitle">Freedom to wellness</h4>
				<Button onClick={() => scrollTo("services")} text="View Services" />
			</StyledHero>
		</Section>
	);
};

export default Hero;
