import styled from "styled-components";
import briefHistoryBackground from "./../../assets/history-background.jpg";

export const StyledBriefHistory = styled.section`
	background: linear-gradient(#fae9d3a6, #fae9d3a6),
		url(${briefHistoryBackground}) no-repeat center/cover;
	padding: 114px 0;

	.brief-history-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 35px;
	}

	.section-title {
		font-size: 36px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		text-transform: capitalize;
		text-align: center;
		color: ${({ theme }) => theme.aboutUsHeading};
	}

	.section-body {
		text-align: center;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: 25px; /* 156.25% */
		letter-spacing: 0.32px;
		color: ${({ theme }) => theme.aboutUsText};
	}

	.brief-history-button {
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	@media screen and (min-width: 1280px) {
		.section-body {
			text-align: right;
			width: 50%;
		}

		.brief-history-container {
			justify-content: center;
			align-items: flex-end;
		}
	}
`;
