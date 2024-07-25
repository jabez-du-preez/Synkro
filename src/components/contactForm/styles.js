import styled from "styled-components";
import contactBackground from "./../../assets/contact-background.jpg";

export const StyledContactForm = styled.section`
	padding: 2rem 0;
	width: 100%;

	background: linear-gradient(#c3d3bbc7, #c3d3bbc7),
		url(${contactBackground}) no-repeat center/cover;

	label {
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		text-transform: capitalize;
		color: ${({ theme }) => theme.contactInputLabel};
	}

	input,
	textarea {
		padding: 1rem;
		background: ${({ theme }) => theme.contactInputBackground};
		border-radius: 2px;
		color: ${({ theme }) => theme.contactInputText};
		font-size: 14px;

		&:focus,
		&:active {
			outline: 2px solid ${({ theme }) => theme.contactInputBorder};
			box-shadow: 0px 0px 43.5px 2px #374e2d70;
		}
	}

	.contact-form-heading {
		font-size: 28px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		text-transform: capitalize;
		text-align: center;
		margin-bottom: 30px;
		color: ${({ theme }) => theme.contactHeader};
	}

	.contact-form-container {
		width: 100%;
	}

	.contact-form {
		display: flex;
		flex-direction: column;
		row-gap: 30px;
	}

	.row-1 {
		display: flex;
		flex-wrap: wrap;
		width: 100%;
		gap: 30px;
	}

	.contact-form {
		width: 100%;
	}

	fieldset {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
		width: 100%;
	}

	@media (min-width: 768px) {
		.contact-form-container {
			width: 100%;
			margin: 0 auto;
		}

		.row-1 {
			flex-wrap: nowrap;
		}

		label {
			font-size: 18px;
		}

		.contact-form-heading {
			font-size: 28px;
		}
	}

	@media (min-width: 1024px) {
		.contact-form-container {
			width: 75%;
			margin: 0 auto;
		}
	}
`;
