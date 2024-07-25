import React from "react";
import { StyledHome } from "./styles";
import { Footer, Services, Testimonials } from "../../views";
import { BackToTop, BriefHistory, Hero, Navigation } from "../../components";

const Home = () => {
	return (
		<StyledHome>
			<Navigation />
			<Hero />
			<BriefHistory />
			<Services />
			<Testimonials />
			<Footer />
			<BackToTop />
		</StyledHome>
	);
};

export default Home;
