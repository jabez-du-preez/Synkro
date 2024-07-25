import styled from "styled-components";

export const StyledTestimonials = styled.section`
	background: #f7ead9;
	width: 100%;
	padding: 63px 0;

	.testimonials-container {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		row-gap: 64px;
	}

	.testimonials-title {
		text-align: center;
		font-size: 28px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		text-transform: capitalize;
		margin-bottom: 24px;
	}

	.swiper {
		padding-bottom: 3.5rem;
	}

	.swiper-wrapper {
		display: flex;
		align-items: stretch;
	}

	.swiper-slide {
		display: flex;
		align-items: center;
		justify-content: center;
		height: auto; /* Allow height to be flexible */
		padding: 0.75rem;
	}

	.swiper-pagination {
		bottom: 0;
	}

	.swiper-pagination-bullet-active {
		background: #5a7050;
	}

	@media (min-width: 768px) {
		.testimonials-title {
			font-size: 28px;
		}
	}
`;
