import React from "react";
import { StyledContactForm } from "./styles";
import Container from "../container/Container";
import Button from "../button/Button";

const ContactForm = () => {
	return (
		<StyledContactForm>
			<Container>
				<section className="contact-form-container">
					<h3 className="contact-form-heading">Feel free to contact us</h3>
					<form className="contact-form">
						<div className="row-1">
							<fieldset>
								<label htmlFor="name">Name</label>
								<input type="text" placeholder="Jane Doe" />
							</fieldset>
							<fieldset>
								<label htmlFor="phone">Phone Number</label>
								<input type="text" placeholder="012 345 6789" />
							</fieldset>
						</div>
						<fieldset>
							<label htmlFor="email">Email</label>
							<input type="email" placeholder="jane.doe@gmail.com" />
						</fieldset>
						<fieldset>
							<label htmlFor="message">Message</label>
							<textarea placeholder="Hi there, I require your services..."></textarea>
						</fieldset>
						<Button type="submit" text={"Send"} />
					</form>
				</section>
			</Container>
		</StyledContactForm>
	);
};

export default ContactForm;
