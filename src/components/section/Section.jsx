import React from "react";
import { StyledSection } from "./styles";

const Section = ({ children, id }) => {
	return <StyledSection id={id}>{children}</StyledSection>;
};

export default Section;
