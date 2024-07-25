import React from "react";
import { StyledFooter } from "./styles";
import { ContactForm, Container } from "../../components";
import synkroLogo from "../../assets/synkro-logo.svg";
import { IoLogoFacebook } from "react-icons/io";
import { FaSquareInstagram } from "react-icons/fa6";
import { scrollTo } from "../../helpers";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<StyledFooter id="contact">
			<ContactForm />
			<Container>
				<div className="footer-container">
					<div className="footer-logo" onClick={() => scrollTo("top")}>
						<img src={synkroLogo} alt="Synkro Logo" />
					</div>
					<div className="footer-content">
						<div className="footer-additional">
							<p>+27 245 5896 | info@synkrohealth.co.za</p>
							<p>Mon -Fri: 8am-4pm | Sat: 8am-12pm</p>
						</div>
						<div className="footer-socials">
							<a href="https://www.facebook.com" className="footer-social-link">
								<IoLogoFacebook />
							</a>
							<a href="https://www.twitter.com" className="footer-social-link">
								<FaSquareInstagram />
							</a>
							<p>{currentYear} © Synkro Health</p>
						</div>
					</div>
				</div>
			</Container>
			<div className="footer-credits">
				<p>
					Created by{" "}
					<a href="https://zenithdigital.co.za" target="_blank">
						Zenith Digital Media
					</a>
				</p>
			</div>
		</StyledFooter>
	);
};

export default Footer;
