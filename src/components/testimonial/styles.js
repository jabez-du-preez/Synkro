import styled from "styled-components";

export const StyledTestimonial = styled.section`
	width: 100%;
	height: calc(100% - 5%);
	position: relative;

	.testimonial-container {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: stretch;
		row-gap: 1rem;
		width: 100%;
		height: 100%;

		padding: 1rem;
		background: #fff6eb;
		border-radius: 2px;
		position: relative;
		top: 0;
		left: 0;
		z-index: 1;
	}

	.testimonial-background {
		position: absolute;
		top: 10px; /* Adjust the vertical offset */
		left: -10px; /* Adjust the horizontal offset */
		width: 100%;
		height: 100%;
		background-color: #afc5a5; /* Shadow color */
		z-index: 0;
		border-radius: 2px;
	}

	.testimonial-author {
		display: flex;
		align-items: center;
		flex-direction: column;
		justify-content: flex-end;
		align-items: flex-end;
		width: 100%;
		padding-bottom: 1.5rem;
	}

	.testimonial-text {
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.author-name {
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: 124.2%; /* 29.808px */
		text-transform: capitalize;
	}

	@media (min-width: 768px) {
		.testimonial-text {
			font-size: 16px;
		}

		.author-name {
			font-size: 20px;
			padding-bottom: 0.5rem;
		}
	}

	@media (min-width: 1024px) {
		.testimonial-text {
			font-size: 14px;
		}

		.author-name {
			font-size: 18px;
		}
	}
`;
