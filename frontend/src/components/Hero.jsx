import React from "react";
import firstimg from "../assets/img/home-book-1.png";
import secondimg from "../assets/img/home-book-2.png";
import thirdimg from "../assets/img/home-book-3.png";
import fourthimg from "../assets/img/home-book-4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export const Hero = () => {
  return (
    <>
      {/* <!--==================== HOME ====================--> */}
      <Fade damping={0.4}>
        <section className="home section" id="home">
          <div
            initial={{ opacity: 0 }} // Initial state (hidden)
            whileInView={{ opacity: 1 }} // Animate to visible when in view
            viewport={{ once: true }}
            className="home__container container grid"
          >
            <div className="home__data">
              <h1 className="home__title">
                Browse & <br />
                Select Books
              </h1>

              <p className="home__description">
                Find the best books from your favorite writers, explore hundreds
                of books with all possible categories, take advantage of the 50%
                discount and much more.
              </p>

              <a href="#featured" className="button">
                Explore Now
              </a>
              {/* Allowed to list book only after authentication */}
              <Link to="/add-new-book" className="button ml-5">
                List Book
              </Link>
            </div>

            <div className="home__images">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                loop={true}
                slidesPerView={"auto"}
                //  spaceBetween={16}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 30,
                  depth: 100,
                  modifier: 2.5,
                  slideShadows: false,
                }}
                autoplay={{ delay: 2000 }}
                modules={[Autoplay, EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
              >
                <SwiperSlide>
                  {/* <article className="home__article swiper-slide"> */}
                  <img src={firstimg} alt="image" className="home__img" />
                  {/* </article> */}
                </SwiperSlide>
                <SwiperSlide>
                  {/* <article className="home__article swiper-slide"> */}
                  <img src={secondimg} alt="image" className="home__img" />
                  {/* </article> */}
                </SwiperSlide>
                <SwiperSlide>
                  {/* <article className="home__article swiper-slide"> */}
                  <img src={thirdimg} alt="image" className="home__img" />
                  {/* </article> */}
                </SwiperSlide>
                <SwiperSlide>
                  {/* <article className="home__article swiper-slide"> */}
                  <img src={fourthimg} alt="image" className="home__img" />
                  {/* </article> */}
                </SwiperSlide>
              </Swiper>
              {/* </div>
                  </div> */}
            </div>
          </div>
        </section>

        {/* <!--==================== SERVICES ====================--> */}
        <section className="services section">
          <div className="services__container container grid">
            <article className="services__card">
              <i className="ri-truck-line"></i>
              <h3 className="services__title">Free Shipping</h3>
              <p className="services__description">Order More Than ₹100</p>
            </article>

            <article className="services__card">
              <i className="ri-lock-2-line"></i>
              <h3 className="services__title">Secure Payment</h3>
              <p className="services__description">100% Secure Payment</p>
            </article>

            <article className="services__card">
              <i className="ri-customer-service-2-line"></i>
              <h3 className="services__title">24/7 Support</h3>
              <p className="services__description">Call us anytime</p>
            </article>
          </div>
        </section>
      </Fade>
    </>
  );
};
