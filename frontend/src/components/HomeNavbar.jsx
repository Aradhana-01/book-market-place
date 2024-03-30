import React, { useState } from "react";
import { Login } from "./Login";
import { useTheme } from "./ThemeContext";
import { Search } from "./Search";

export const HomeNavbar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [searchOpen, setSearchOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);


  const { isDarkMode, setIsDarkMode, toggleTheme } = useTheme();

  const handleNavLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  const handleIconClick = () => {
    setIsDarkMode((prevState) => !prevState);

    if (!isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
  };

  return (
    <>
      {/* <!--==================== HEADER ====================--> */}
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            <i className="ri-book-3-line"></i> GetBook
          </a>

          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="#home"
                  className={`nav__link ${
                    activeLink === "home" ? "active-link" : ""
                  }`}
                  onClick={() => handleNavLinkClick("home")}
                >
                  <i className="ri-home-line"></i>
                  <span>Home</span>
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#featured"
                  className={`nav__link ${
                    activeLink === "featured" ? "active-link" : ""
                  }`}
                  onClick={() => handleNavLinkClick("featured")}
                >
                  <i className="ri-book-3-line"></i>
                  <span>Featured</span>
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#discount"
                  className={`nav__link ${
                    activeLink === "discount" ? "active-link" : ""
                  }`}
                  onClick={() => handleNavLinkClick("discount")}
                >
                  <i className="ri-price-tag-3-line"></i>
                  <span>Discount</span>
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#new"
                  className={`nav__link ${
                    activeLink === "newbook" ? "active-link" : ""
                  }`}
                  onClick={() => handleNavLinkClick("newbook")}
                >
                  <i className="ri-bookmark-line"></i>
                  <span>New Books</span>
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#testimonial"
                  className={`nav__link ${
                    activeLink === "testimonial" ? "active-link" : ""
                  }`}
                  onClick={() => handleNavLinkClick("testimonial")}
                >
                  <i className="ri-message-3-line"></i>
                  <span>Testimonials</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="nav__actions">
            {/* <!-- Search button --> */}
            <i
              className="ri-search-line search-button"
              id="search-button"
              onClick={() => {
                setSearchOpen(true);
              }}
            ></i>

            {/* <!-- Login button --> */}
            <i
              className="ri-user-line login-button"
              id="login-button"
              onClick={() => {
                setLoginOpen(true);
              }}
            ></i>

            {/* <!-- Theme button --> */}
            <i
              className={`ri-${isDarkMode ? "sun" : "moon"}-line change-theme `}
              id="theme-button"
              onClick={handleIconClick}
            ></i>
          </div>
        </nav>
      </header>

      <Search searchOpen={searchOpen} setSearchOpen={setSearchOpen} />

      <Login loginOpen={loginOpen} setLoginOpen={setLoginOpen} />
    </>
  );
};
