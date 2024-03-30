import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Adjust this value as needed for the specific Y-axis position
      const scrollThreshold = 350; // Example threshold

      // Check if scroll position is greater than or equal to the threshold
      if (scrollY >= scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Run effect only once on component mount

  const scrollClassName = isScrolled ? "scrollup" : "";
  return (
    <>
      {/* // <!--==================== FOOTER ====================--> */}

      <footer className="footer ">
        <div className="footer__container container grid">
          <div>
            <a href="#" className="footer__logo">
              <i className="ri-book-3-line"></i>GetBook
            </a>

            <Link to="/share-testimonial">
              <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none  font-bold rounded-full  mt-0  ml-2 bg-hsl-color hover:bg-indigo-400 text-white">
                Share Testimonial
                <i className="ri-share-forward-line text-2xl ml-1"></i>
              </button>
            </Link>

            <p className="footer__description">
              Find and explore the best <br />
              Books from all your <br />
              favorite writers.
            </p>
          </div>

          <div className="footer__data grid">
            <div>
              <h3 className="footer__title">About</h3>
              <ul className="footer__links">
                <li>
                  <a href="#" className="footer__link">
                    Awards
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    FAQs
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Privacy policy
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Terms of services
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="footer__title">Company</h3>
              <ul className="footer__links">
                <li>
                  <a href="#" className="footer__link">
                    Blogs
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Our team
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Help center
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="footer__title">Contact</h3>
              <ul className="footer__links">
                <li>
                  <address className="footer__info">
                    Mumbai, 40001 <br />
                    Maharashtra, India
                  </address>
                  <address className="footer__info">
                    getbook@email.com <br />
                    0987-654-321
                  </address>
                  <Link to="/" className="mt-2">
                    <button className="inline-flex items-center bg-green-600 border-0 py-1 px-3 focus:outline-none  font-bold rounded-full mt-0  ml-2 bg-hsl-color hover:bg-green-500 text-white">
                      Contact here{" "}
                      <i className="ri-whatsapp-line text-2xl ml-1"></i>
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="footer__title">Socials</h3>
              <div className="footer__social">
                <button className="socialhover  socialcolor">
                  {" "}
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    className="footer__social-link "
                  >
                    <i className="ri-facebook-circle-line"></i>
                  </a>{" "}
                </button>
                <button className="socialhover socialcolor">
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    className="footer__social-link "
                  >
                    <i className="ri-instagram-line"></i>
                  </a>
                </button>
                <button className="socialhover socialcolor">
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    className="footer__social-link "
                  >
                    <i className="ri-twitter-x-line"></i>
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>

        <span className="footer__copy">
          &#169; All Rights Reserved By Ar-D-Codes
        </span>
      </footer>

      {/* <!--========== SCROLL UP ==========--> */}
      <a href="#" className={`"scrollup" ${scrollClassName}`} id="scroll-up">
        <i className="ri-arrow-up-line"></i>
      </a>
    </>
  );
};
