import React from "react";
import { Link } from "react-router-dom";

export const BooksCard = ({ img }) => {
  return (
    <Link to="/book-detail" className="new__card ">
      <img src={img} alt="image" className="new__img" />

      <div>
        <h2 className="new__title">New Book</h2>
        <div className="new__prices">
          <span className="new__discount">₹7.99</span>
          <span className="new__price">₹14.99</span>
        </div>

        <div className="new__stars">
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-fill"></i>
          <i className="ri-star-half-fill"></i>
        </div>
      </div>
    </Link>
  );
};
