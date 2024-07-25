import React from "react";
import { StyledTestimonial } from "./styles";
import quoteImage from "../../assets/quote.svg";

const Testimonial = ({ id, text, author, company, className }) => {
	return (
		<StyledTestimonial id={id} className={className}>
			<div className="testimonial-background"></div>
			<div className="testimonial-container">
				<div className="quote">
					<img src={quoteImage} alt="quote" />
				</div>
				<div className="testimonial-content">
					<p className="testimonial-text">{text}</p>
				</div>
				<div className="testimonial-author">
					<p className="author-name">-{author}</p>
				</div>
			</div>
		</StyledTestimonial>
	);
};

export default Testimonial;
