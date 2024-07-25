import styled from "styled-components";

export const StyledButton = styled.div`
	.button {
		border-radius: 2px;
		background: ${({ theme }) => theme.ctaButton};
		padding: 8px 30px;
		justify-content: center;
		align-items: center;
		display: flex;
		width: 100%;

		color: ${({ theme }) => theme.ctaButtonText};

		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;

		transition: all 0.3s ease-in-out;

		&:hover {
			background: ${({ theme }) => theme.ctaButtonHover};
			transform: scale(1.05);
		}
	}
`;
