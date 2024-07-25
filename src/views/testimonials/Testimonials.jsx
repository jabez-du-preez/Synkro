import React from "react";
import { StyledTestimonials } from "./styles";
import testimonialsConfig from "./testimonialsConfig";
import { Container, Section, Testimonial } from "../../components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

const Testimonials = () => {
	return (
		<Section id="testimonials">
			<StyledTestimonials>
				<Container className={"testimonials-container"}>
					<h2 className="testimonials-title">what clients say about us</h2>
				</Container>
				<Container>
					<Swiper
						modules={[Pagination, Autoplay]}
						breakpoints={{
							390: { slidesPerView: 1, spaceBetween: 10 },
							768: { slidesPerView: 2, spaceBetween: 20 },
							1440: { slidesPerView: 2.5, spaceBetween: 30 },
						}}
						centeredSlides={true}
						scrollbar={{ draggable: true }}
						autoplay={{
							delay: 4500,
							disableOnInteraction: false,
						}}
						loop={true}
						pagination={{
							clickable: true,
						}}
					>
						{testimonialsConfig?.map((testimonial) => (
							<SwiperSlide key={`${testimonial.id}-${Math.random()}`}>
								<Testimonial {...testimonial} />
							</SwiperSlide>
						))}
					</Swiper>
				</Container>
			</StyledTestimonials>
		</Section>
	);
};

export default Testimonials;
