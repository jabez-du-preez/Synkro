import React from "react";
import { StyledServiceBubble } from "./styles";
import Button from "./../button/Button";

const ServiceBubble = ({
	color,
	number,
	title,
	explaination,
	className,
	onMouseEnter,
	onMouseLeave,
}) => {
	return (
		<StyledServiceBubble
			// className={className}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<div className={`service-bubble ${color}`}>
				<div className="bubble-heading mb-2">
					<h1 className="number">{number}</h1>
					<h1 className="title">{title}</h1>
				</div>
				<div className="explaination-container">
					<p className="explaination">{explaination}</p>
					<Button className={"learn-more-button"} text={"Learn More"} />
				</div>
			</div>
		</StyledServiceBubble>
	);
};

export default ServiceBubble;
