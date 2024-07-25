import React, { useEffect, useState } from "react";
import { StyledNavigation, StyledNavigationContainer } from "./styles";
import navigationConfig from "./navigationConfig";
import Button from "../button/Button";
import SynkroLogo from "../../assets/SynkroLogo";
import Container from "../container/Container";
import { HiMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import SynkroMobile from "../../assets/SynkroMobile";

const Navigation = () => {
	const [switchFill, setSwitchFill] = useState(false);
	const [menuOpen, setMenuOpen] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", function () {
			var navbar = document.querySelector(".navigation");
			var scrollPoint = 100; // Change this to your desired scroll point in pixels

			if (window.scrollY >= scrollPoint) {
				setSwitchFill(true);
				navbar.classList.add("navigation-scrolled");
			} else {
				setSwitchFill(false);
				navbar.classList.remove("navigation-scrolled");
			}
		});
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", function () {
			setMenuOpen(false);
		});

		return () => {
			window.removeEventListener("scroll", function () {
				setMenuOpen(false);
			});
		};
	}, []);

	return (
		<StyledNavigationContainer>
			<StyledNavigation className="navigation">
				<Container className={"nav-container"}>
					<div className="navigation-container">
						<a href="/" className="navigation-logo">
							<SynkroLogo
								className={"logo"}
								fill={switchFill ? "#374E2D" : "#F0FFE8"}
							/>
						</a>
						<a href="/" className="mobile-nav-logo">
							<SynkroMobile
								className={"logo"}
								fill={switchFill ? "#374E2D" : "#F0FFE8"}
							/>
						</a>
						<div className="navigation-links">
							{navigationConfig.map((navLink) => (
								<a
									className="navigation-link"
									key={navLink.id}
									href={navLink.link}
								>
									{navLink.text}
								</a>
							))}
						</div>
						<div className="navigation-button">
							<Button text="Book Now" />
						</div>
						<HiMenuAlt2
							size={36}
							color="#fff"
							className="menu-btn menu-button"
							onClick={() => {
								setMenuOpen(true);
							}}
						/>
						<div
							className={`mobile-nav-container ${menuOpen ? "open" : "closed"}`}
						>
							<RxCross2
								size={36}
								color="#fff"
								className="menu-button menu-button-close"
								onClick={() => {
									setMenuOpen(false);
								}}
							/>
							<a href="/" className="mobile-navigation-logo">
								<SynkroMobile
									className={"mobile-panel-logo"}
									fill={"#374E2D"}
								/>
							</a>
							<div className="mobile-nav-links">
								{navigationConfig.map((navLink) => (
									<a
										className="mobile-nav-link"
										key={navLink.id}
										href={navLink.link}
										onClick={() => {
											setMenuOpen(false);
										}}
									>
										{navLink.text}
									</a>
								))}
							</div>
							<div className="mobile-nav-button">
								<Button text="Book Now" />
							</div>
						</div>
					</div>
				</Container>
			</StyledNavigation>
		</StyledNavigationContainer>
	);
};

export default Navigation;
