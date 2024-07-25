import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa6";
import { StyledBackToTop } from "./styles";
import { scrollTo } from "../../helpers";

const BackToTop = () => {
	const [showButton, setShowButton] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 1000) {
				// Change this value to set the scroll position
				setShowButton(true);
			} else {
				setShowButton(false);
			}
		};

		handleScroll();

		window.addEventListener("scroll", handleScroll);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<StyledBackToTop>
				<button
					onClick={() => scrollTo("top")}
					className={`back-to-top-button ${
						showButton ? "appear" : "disappear"
					}`}
				>
					<FaArrowUp className="back-to-top" />
				</button>
			</StyledBackToTop>
		</>
	);
};

export default BackToTop;
