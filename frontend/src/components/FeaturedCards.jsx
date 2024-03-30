import React from "react";
import { Link } from "react-router-dom";

export const FeaturedCards = ({ img }) => {
  return (
    <article className="featured__card ">
      <img src={img} alt="image" className="featured__img" />
      <h2 className="featured__title">Featured Book</h2>
      <div className="featured__prices">
        <span className="featured__discount">₹11.99</span>
        <span className="featured__price">₹19.99</span>
      </div>

      <button className="button">Buy Now</button>
      <div className="featured__actions">
        <button className="btn-trans">
          <i className="ri-search-line"></i>
        </button>
        {/* <button className="btn-trans"><i className="ri-heart-3-line"></i></button> */}
        <Link to="/book-detail">
          <button className="btn-trans">
            <i className="ri-eye-line"></i>
          </button>
        </Link>
      </div>
    </article>
  );
};
