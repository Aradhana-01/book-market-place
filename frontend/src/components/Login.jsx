import React, { useState } from "react";

export const Login = ({ loginOpen, setLoginOpen }) => {
  const [linkClicked, setLinkClicked] = useState(false);
  const handleClick = () => {
    setLinkClicked((prev) => !prev);
    console.log(linkClicked);
  };

  return (
    <>
      {/* <!--==================== LOGIN ====================--> */}

      <div
        className={`login grid ${loginOpen ? "show-login" : ""}`}
        id="login-content"
      >
        {linkClicked == true ? (
          <form action="" className="login__form grid">
            <h3 className="login__title">Log In</h3>

            <div className="login__group grid">
              <div>
                <label htmlFor="login-email" className="login__label">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Write your email"
                  id="login-email"
                  className="login__input"
                />
              </div>

              <div>
                <label htmlFor="login-pass" className="login__label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  id="login-pass"
                  className="login__input"
                />
              </div>
            </div>

            <div>
              <span className="login__signup">
                You do not have an account?{" "}
                <a
                  href="#"
                  onClick={() => {
                    setLinkClicked((prev) => {
                      !prev;
                    });
                  }}
                >
                  Sign up
                </a>
              </span>

              {/* <a href="#" className="login__forgot">
             You forgot your password
          </a> */}
              <button type="submit" href="#" className="login__button button">
                Log In
              </button>
            </div>
          </form>
        ) : (
          <form action="" className="login__form grid mt-8">
            <h3 className="login__title">Sign Up</h3>

            <div className="login__group grid">
              <div>
                <label htmlFor="name" className="login__label">
                  Enter Name
                </label>
                <input
                  type="text"
                  placeholder="Write your name"
                  id="login-name"
                  className="login__input"
                />
              </div>
              <div>
                <label htmlFor="login-email" className="login__label">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Write your email"
                  id="login-email"
                  className="login__input"
                />
              </div>

              <div>
                <label htmlFor="login-pass" className="login__label">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  id="login-pass"
                  className="login__input"
                />
              </div>
            </div>

            <div>
              <span className="login__signup">
                Already have an account?{" "}
                <a href="#" onClick={handleClick}>
                  Login up
                </a>
              </span>

              {/* <a href="#" className="login__forgot">
              You forgot your password
           </a> */}
              <button type="submit" href="#" className="login__button button">
                Sign Up
              </button>
            </div>
          </form>
        )}

        <i
          className="ri-close-line login__close"
          id="login-close"
          onClick={() => {
            setLoginOpen(false);
          }}
        ></i>
      </div>
    </>
  );
};
