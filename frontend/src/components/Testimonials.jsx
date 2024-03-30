import React from "react";
import img1 from "../assets/img/testimonial-perfil-1.png";
import img2 from "../assets/img/testimonial-perfil-2.png";
import img3 from "../assets/img/testimonial-perfil-3.png";
import img4 from "../assets/img/testimonial-perfil-4.png";
import { TestimonialCard } from "./testimonial.card";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, } from "swiper/modules";
import { Fade } from "react-awesome-reveal";
export const Testimonials = () => {
  return (
    // <!--==================== TESTIMONIAL ====================-->
    <Fade damping={0.4}>
      <section className="testimonial section" id="testimonial">
        <h2 className="section__title">Customer Opinions</h2>

        <div className="testimonial__container container">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={"auto"}
            loop={true}
            slidesPerView={"auto"}
            spaceBetween={16}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 0,
              slideShadows: false,
            }}
            breakpoints={{
              1150: {
                slidesPerView: 3,
                centeredSlides: false,
              },
              950: {
                slidesPerView: 3,
                centeredSlides: false,
              },
              460: {
                slidesPerView: 2,
                centeredSlides: false,
              },
              360: {
                slidesPerView: 1,
                centeredSlides: false,
              },
            }}
            modules={[EffectCoverflow]}
            className="swiper_container_card"
          >
            <SwiperSlide>
              <TestimonialCard image={img1} />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard image={img2} />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard image={img3} />
            </SwiperSlide>
            <SwiperSlide>
              <TestimonialCard image={img4} />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </Fade>
  );
};
