import React from "react";

export const TestimonialCard = ({ image }) => {
  return (
    <article className="testimonial__card ">
      <img src={image} alt="image" className="testimonial__img" />

      <h2 className="testimonial__title">Harsh Mehta</h2>
      <p className="testimonial_description">
        The best website to buy books, the purchase is very easy to make and has
        great discounts.
      </p>

      <div className="testimonial__stars">
        <i className="ri-star-fill"></i>
        <i className="ri-star-fill"></i>
        <i className="ri-star-fill"></i>
        <i className="ri-star-fill"></i>
        <i className="ri-star-half-fill"></i>
      </div>
    </article>
  );
};
