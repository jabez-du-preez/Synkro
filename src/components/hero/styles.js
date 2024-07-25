import styled from "styled-components";
import heroBackground from "./../../assets/hero.jpg";

export const StyledHero = styled.section`
	background: linear-gradient(#00000080, #00000080),
		url(${heroBackground}) no-repeat center/cover;
	padding: 122px 0;
	width: 100%;
	height: 100vh;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 20px;

	.hero-title {
		font-size: 32px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		color: white;
	}

	.hero-subtitle {
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		color: white;
		margin-bottom: 0.5rem;
	}

	@media screen and (min-width: 768px) {
		.hero-title {
			font-size: 48px;
		}

		.hero-subtitle {
			font-size: 20px;
		}
	}

	@media screen and (min-width: 1024px) {
		.hero-title {
			font-size: 60px;
		}

		.hero-subtitle {
			font-size: 26px;
		}
	}
`;
