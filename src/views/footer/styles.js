import styled from "styled-components";

export const StyledFooter = styled.footer`
	padding-bottom: 2rem;

	.footer-container {
		padding: 34px 0;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 35px;
	}

	.footer-content {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	.footer-additional {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: 10px;
	}

	.footer-content p {
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		text-align: center;
		color: ${({ theme }) => theme.footerText};
	}

	.footer-socials {
		display: flex;
		flex-direction: row;
		gap: 20px;
		justify-content: center;
		align-items: center;
		color: ${({ theme }) => theme.footerText};
	}

	.footer-social-link {
		display: flex;
		justify-content: center;
		align-items: center;

		svg {
			width: 30px;
			height: 30px;
			color: #43543c;
		}
	}

	.footer-credits {
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		text-align: center;
		color: ${({ theme }) => theme.footerText};

		a {
			font-weight: 500;
			text-decoration: none;
			color: #5a7050;
		}
	}

	@media screen and (min-width: 768px) {
		.footer-container {
			flex-direction: row;
			justify-content: space-between;
		}

		.footer-content {
			gap: 1rem;
			justify-content: flex-end;
			align-items: flex-end;
		}

		.footer-additional {
			justify-content: flex-end;
			align-items: flex-end;
		}
	}

	@media screen and (min-width: 1280px) {
		.footer-content {
			flex-direction: row;
			gap: 60px;
			justify-content: center;
			align-items: center;
		}
	}
`;
