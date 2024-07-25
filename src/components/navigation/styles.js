import styled from "styled-components";

export const StyledNavigationContainer = styled.main`
	.navigation-scrolled {
		background: #fff6ebec;

		.navigation-link {
			color: #374e2d;
		}

		.menu-button {
			color: #374e2d !important;
		}
	}
`;

export const StyledNavigation = styled.nav`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	z-index: 1002;

	.nav-container {
		padding: 0.5rem;
	}

	.navigation-container {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
	}

	.navigation-logo {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		display: none;
	}

	.mobile-nav-logo {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.mobile-panel-logo {
		width: 100px;
		height: auto;
	}

	.navigation-links {
		display: none;
	}

	.navigation-link {
		color: #fff6eb;
		font-size: 16px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;

		&:hover {
			color: #afc5a5;
		}
	}

	.navigation-button .button {
		display: none;
	}

	.mobile-nav-container {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		padding: 1rem;
		background: #f0ffe8;
		color: white;
		width: 100%;
		height: 100vh;
		position: absolute;
		top: 0;
		right: 0;
		z-index: 1001;
		overflow: hidden;
	}

	.menu-button-close {
		color: #374e2d !important;
		position: absolute;
		top: 1rem;
		right: 1rem;
		color: white;
	}

	.mobile-nav-container.open {
		margin-right: 0;
	}

	.mobile-nav-container.closed {
		margin-right: -100%;
	}

	.mobile-nav-links {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		gap: 2rem;
		align-items: center;
	}

	.mobile-nav-link {
		color: #374e2d;
		font-size: 18px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	@media (min-width: 768px) {
		.mobile-nav-container {
			width: 50%;
		}

		* {
			transition: all 0.5s ease-in-out;
		}
	}

	@media (min-width: 1280px) {
		.navigation-links {
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			align-items: center;
			gap: 4rem;
		}

		.navigation-button .button {
			font-size: 14px;
			font-style: normal;
			font-weight: 400;
			line-height: normal;
			color: white;
			display: block;
		}

		.menu-button {
			display: none;
		}
	}
`;
