import React from "react";
import { StyledContainer } from "./styles";

const Container = ({ className, children }) => {
	return <StyledContainer className={className}>{children}</StyledContainer>;
};

export default Container;
