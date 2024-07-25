import styled from "styled-components";

export const StyledServiceBubble = styled.div`
	.service-bubble {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;

		border-radius: 50%;
		width: 12rem;
		height: 12rem;
		box-shadow: 0px 0px 43.5px 2px #374e2d24;

		&:hover .explaination-container {
			clip-path: circle(100%);
		}

		&:active .explaination-container {
			clip-path: circle(100%);
		}

		.bubble-heading {
			display: flex;
			flex-direction: column;
			transition: all 0.5s ease-in-out;
			text-align: center;
			justify-content: center;
			align-items: center;
		}

		.explaination-container {
			background-color: #fff6eb;
			clip-path: circle(0% at 50% 50%);
			transition: all 0.5s ease-in-out;
			position: absolute;
			max-width: 80%;
			min-height: 25%;
			border-radius: 25px;
			padding: 1rem;
			display: flex;
			justify-content: center;
			align-items: center;
			flex-direction: column;
			gap: 1.5rem;
			box-shadow: 0px 0px 43.5px 2px #374e2d59;

			font-size: 16px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
			text-align: center;

			@media (min-width: 768px) {
				max-width: 25%;
			}

			@media (min-width: 1280px) {
				max-width: 15%;
			}

			.learn-more-button {
				font-size: 16px;
			}

			&:hover {
				clip-path: circle(100%);
			}
		}
	}

	.number {
		font-size: 30px;
		font-style: normal;
		font-weight: 600;
		line-height: normal;
	}

	.title {
		font-size: 17px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		text-transform: capitalize;
		width: 90%;
	}

	.army-green {
		background: #adac99;
	}

	.light-peach {
		background: #eecaaf;
	}

	.light-tea {
		background: #f0ffe8;
	}

	.light-sky {
		background: #b6d1d9;
	}

	.burning-pink {
		background: #f29b9b;
	}

	.blaze-green {
		background: #88a096;
	}

	.sun-orange {
		background: #fdd29a;
	}

	.light-purple {
		background: #c0b1b7;
	}
`;
