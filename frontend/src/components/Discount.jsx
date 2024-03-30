import React from "react";
import img1 from "../assets/img/discount-book-1.png";
import img2 from "../assets/img/discount-book-2.png";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

export const Discount = () => {
  return (
    // <!--==================== DISCOUNT ====================-->
    <Fade damping={0.4}>
      <section className="discount section" id="discount">
        <div className="discount__container container grid">
          <div className="discount__data">
            <h2 className="discount__title section__title">
              Up To 50% Discount
            </h2>

            <p className="discount__description">
              Take advantage of the discount days we have for you, buy books
              from your favorite writers, the more you buy, the more discounts
              we have for you.
            </p>
            <Link to="#" className="button">
              Shop Now
            </Link>
          </div>

          <div className="discount__images">
            <img src={img1} alt="image" className="discount__img-1" />
            <img src={img2} alt="image" className="discount__img-2" />
          </div>
        </div>
      </section>
    </Fade>
  );
};
