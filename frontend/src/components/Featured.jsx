import React from "react";
import { FeaturedCards } from "./FeaturedCards";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

import img1 from "../assets/img/book-1.png";
import img2 from "../assets/img/book-2.png";
import img3 from "../assets/img/book-3.png";
import img4 from "../assets/img/book-4.png";
import img5 from "../assets/img/book-5.png";
import img6 from "../assets/img/book-6.png";
import img7 from "../assets/img/book-7.png";
import img8 from "../assets/img/book-8.png";
import img9 from "../assets/img/book-9.png";
import img10 from "../assets/img/book-10.png";
import { Fade } from "react-awesome-reveal";

export const Featured = () => {
  return (
    // <!--==================== FEATURED ====================-->
    <Fade damping={0.4}>
      <section className="featured section" id="featured">
        <h2 className="section__title">Featured Books</h2>
        <div className="featured__container container">
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
                slidesPerView: 4,
                centeredSlides: false,
              },
              950: {
                slidesPerView: 3,
                centeredSlides: false,
              },
              700: {
                slidesPerView: 2,
                centeredSlides: false,
              },
            }}
            pagination={{ el: ".swiper-pagination", clickable: true }}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
              clickable: true,
            }}
            modules={[EffectCoverflow, Pagination, Navigation]}
            className="swiper_container_card"
          >
            <SwiperSlide>
              <FeaturedCards img={img1} />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCards img={img2} />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCards img={img3} />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCards img={img4} />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCards img={img5} />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCards img={img6} />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCards img={img7} />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCards img={img8} />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCards img={img9} />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCards img={img10} />
            </SwiperSlide>

            <div className="swiper-button-prev">
              <i className="ri-arrow-left-s-line"></i>
            </div>
            <div className="swiper-button-next">
              <i className="ri-arrow-right-s-line"></i>
            </div>
          </Swiper>
        </div>
      </section>
    </Fade>
  );
};
