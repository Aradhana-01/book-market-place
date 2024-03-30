import React from "react";
// import '../styles/custom-nav.css';
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";

export const CustomNavbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <header className="text-gray-600 body-font shadow-header p-2 ml-0 mr-0   w-full bgcolor  fixed top-0 h-20 z-999">
      <div className="ml-0 mr-0 container mx-auto flex flex-wrap whitespace-no-wrap p-5 flex-row justify-center justify-between items-center ">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <span className="ml-3 text-xl whitespace-no-wrap text-hsl-color">
            <i className="ri-book-3-line text-hsl-color"></i> GetBook
          </span>
        </Link>
        {/* <nav className="mr-auto ml-4 py-1 pl-4 border-l border-gray-400	flex flex-wrap items-center text-base justify-center">
     <a href="/" className={`mr-5 hover:text-indigo-900 ${isDarkMode? ' text-white ' : ''}`}>Home</a>
    
   </nav> */}
        <div className="mr-2 justify-end mb-3">
          <Link to="/cart-details">
            <button className="inline-flex items-center  bg-gray-100 border-0 py-1 px-3 focus:outline-none  rounded  mt-0  bg-hsl-color hover:bg-indigo-400 text-white">
              <i className="ri-shopping-cart-2-fill mr-2"></i>
              Cart
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </Link>

          <Link to="/my-profile">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none  rounded  mt-0  ml-2 bg-hsl-color hover:bg-indigo-400 text-white">
              <i className="ri-user-settings-line"></i>
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
};
