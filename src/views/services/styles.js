import styled from "styled-components";

export const StyledServices = styled.section`
	width: 100%;
	height: 100%;
	padding: 122px 0;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 60px;

	.grayscale {
		filter: grayscale(100%);
	}

	.services-container {
		width: 100%;
		height: 100%;
	}

	.services-section-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 60px;
	}

	.services-container {
		display: grid;
		gap: 84px; /* Adjust the gap betSo uneceween grid items as needed */
		grid-template-columns: 1fr;
		width: 100%;
		height: 100%;
		justify-items: center;
		align-items: center;
		padding: 2rem 0;

		@media screen and (min-width: 600px) {
			grid-template-columns: repeat(2, 1fr);
		}

		@media screen and (min-width: 1400px) {
			grid-template-columns: repeat(4, 1fr);
		}
	}

	.section-title,
	.section-subtitle {
		text-align: center;
	}

	.section-title {
		font-size: 36px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		text-transform: capitalize;
		color: ${({ theme }) => theme.servicesHeading};
	}

	.section-subtitle {
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		color: ${({ theme }) => theme.servicesText};
	}
`;
