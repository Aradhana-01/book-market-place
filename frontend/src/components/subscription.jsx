import React from "react";
import bgimg from "../assets/img/join-bg.jpg";
import { Fade } from "react-awesome-reveal";

export const Subscription = () => {
  return (
    // <!--==================== JOIN ====================-->
    <Fade damping={0.4}>
      <section className="join section ">
        <div className="join__container">
          <img src={bgimg} alt="image" className="join__bg" />

          <div className="join__data container grid">
            <h2 className="join__title section__title">
              Subscribe To Receive <br />
              The Latest Updates
            </h2>

            <form action="" className="join__form">
              <input
                type="email"
                placeholder="Enter email"
                className="join__input"
              />
              <button type="submit" className="join__button button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </Fade>
  );
};
