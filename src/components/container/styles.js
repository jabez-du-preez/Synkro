import styled from "styled-components";

export const StyledContainer = styled.div`
	width: 100%;
	max-width: 100%;
	margin: 0 auto;
	padding: 1rem;

	@media screen and (min-width: 768px) {
		max-width: 695px;
	}

	@media screen and (min-width: 1280px) {
		max-width: 1100px;
	}

	@media screen and (min-width: 1440px) {
		max-width: 1140px;
		padding: 0;
	}
`;
