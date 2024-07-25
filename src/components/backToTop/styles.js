import styled from "styled-components";

const StyledBackToTop = styled.div`
	display: flex;
	justify-content: flex-end;
	align-items: flex-end;

	flex-direction: column;
	position: fixed;
	bottom: 10px;
	right: 10px;
	z-index: 1000;

	.back-to-top-button {
		width: 35px;
		height: 35px;
		border-radius: 50%;
		background: ${(props) => props.theme.backToTopBackground};
		box-shadow: ${(props) => props.theme.backToTopBoxShadow};
		display: flex;
		justify-content: center;
		align-items: center;
		margin-top: 0.5rem;

		border: none;

		transition: all 0.3s ease-in-out;

		&:hover {
			cursor: pointer;
			background: ${(props) => props.theme.backToTopBackgroundHover};
		}
	}

	.back-to-top {
		width: 20px;
		height: 20px;
		color: ${(props) => props.theme.backToTopIcon};
	}
`;

export { StyledBackToTop };
