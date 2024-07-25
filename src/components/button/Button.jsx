import React from "react";
import { StyledButton } from "./styles";

const Button = ({ text, containerClassName, className, type, onClick }) => {
	return (
		<StyledButton className={containerClassName}>
			<button onClick={onClick} className={`button ${className}`} type={type}>
				{text}
			</button>
		</StyledButton>
	);
};

export default Button;
