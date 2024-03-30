import React from "react";
import { BooksCard } from "./BooksCard";
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

export const NewBooks = () => {
  return (
    <>
      <Fade damping={0.4}>
        <section className="new section" id="new">
          <h2 className="section__title">New Books</h2>

          <div className="new__container container">
            <Swiper
              grabCursor={true}
              loop={true}
              slidesPerView={"auto"}
              spaceBetween={16}
              breakpoints={{
                1150: {
                  slidesPerView: 3,
                },
                500: {
                  slidesPerView: 2,
                  centeredSlides: false,
                },
                350: {
                  slidesPerView: 1,
                  centeredSlides: false,
                },
              }}
              modules={[EffectCoverflow, Pagination, Navigation]}
              className="swiper_container_card"
            >
              <SwiperSlide>
                <BooksCard img={img1} />
              </SwiperSlide>
              <SwiperSlide>
                <BooksCard img={img2} />
              </SwiperSlide>
              <SwiperSlide>
                <BooksCard img={img3} />
              </SwiperSlide>
              <SwiperSlide>
                <BooksCard img={img4} />
              </SwiperSlide>
              <SwiperSlide>
                <BooksCard img={img5} />
              </SwiperSlide>
              <SwiperSlide>
                <BooksCard img={img6} />
              </SwiperSlide>
              <SwiperSlide>
                <BooksCard img={img7} />
              </SwiperSlide>
              <SwiperSlide>
                <BooksCard img={img8} />
              </SwiperSlide>
              <SwiperSlide>
                <BooksCard img={img9} />
              </SwiperSlide>
              <SwiperSlide>
                <BooksCard img={img10} />
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="new__container container mt-5">
            <Swiper
              grabCursor={true}
              loop={true}
              slidesPerView={"auto"}
              spaceBetween={16}
              breakpoints={{
                1150: {
                  slidesPerView: 3,
                },
                500: {
                  slidesPerView: 2,
                  centeredSlides: false,
                },
                350: {
                  slidesPerView: 1,
                  centeredSlides: false,
                },
              }}
            >
              <SwiperSlide>
                <BooksCard img={img1} />
              </SwiperSlide>
              <SwiperSlide>
                <BooksCard img={img2} />
              </SwiperSlide>
              <SwiperSlide>
                <BooksCard img={img3} />
              </SwiperSlide>
              <SwiperSlide>
                <BooksCard img={img4} />
              </SwiperSlide>
              <SwiperSlide>
                <BooksCard img={img5} />
              </SwiperSlide>
              <SwiperSlide>
                <BooksCard img={img6} />
              </SwiperSlide>
              <SwiperSlide>
                <BooksCard img={img7} />
              </SwiperSlide>
              <SwiperSlide>
                <BooksCard img={img8} />
              </SwiperSlide>
              <SwiperSlide>
                <BooksCard img={img9} />
              </SwiperSlide>
              <SwiperSlide>
                <BooksCard img={img10} />
              </SwiperSlide>
            </Swiper>
          </div>
        </section>
      </Fade>
    </>
  );
};
