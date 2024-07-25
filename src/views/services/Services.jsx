import React, { useState } from "react";
import { StyledServices } from "./styles";
import { Container, Section, ServiceBubble } from "../../components";
import { servicesConfig } from "./servicesConfig";

const Services = () => {
	const [hoveredIndex, setHoveredIndex] = useState(null);

	return (
		<Section id="services">
			<StyledServices className="olive">
				<Container className="services-section-container">
					<h2 className="section-title">What we offer</h2>
					<h5 className="section-subtitle">
						A pelvic floor chair is a specialized device designed to enhance
						pelvic health. Patients sit fully clothed on this chair, which emits
						high-intensity electromagnetic waves. These waves induce deep pelvic
						floor muscle contractions, similar to the effects of doing thousands
						of Kegel exercises in one session.
					</h5>
					<div className="services-container">
						{servicesConfig.map((service, index) => {
							return (
								<ServiceBubble
									key={`${service.number}-${index}`}
									className={`${
										hoveredIndex !== null && hoveredIndex !== index
											? "grayscale"
											: ""
									}`}
									onMouseEnter={() => setHoveredIndex(index)}
									onMouseLeave={() => setHoveredIndex(null)}
									{...service}
								/>
							);
						})}
					</div>
				</Container>
			</StyledServices>
		</Section>
	);
};

export default Services;
