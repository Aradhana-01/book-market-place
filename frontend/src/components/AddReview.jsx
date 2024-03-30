import React from "react";
import { CustomNavbar } from "./CustomNavbar";
import { Footer } from "./Footer";
import { useTheme } from "./ThemeContext";

export const AddReview = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <>
      <CustomNavbar />
      <section
        className={`bgcolor mt-20 ${isDarkMode ? " bg-gray-900 " : ""} `}
      >
        <div className="max-w-2xl px-4 py-8 mx-auto lg:py-16">
          <h2
            className={`mb-4 text-xl font-bold text-gray-900 ${
              isDarkMode ? " text-white " : ""
            } `}
          >
            Share Your Experience
          </h2>
          <form action="#">
            <div className="grid gap-4 mb-4 sm:grid-cols-2 sm:gap-6 sm:mb-5">
              <div className="sm:col-span-2">
                <label
                  htmlFor="name"
                  className={`block mb-2 text-sm font-medium text-gray-900 ${
                    isDarkMode ? "text-white " : ""
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                    isDarkMode
                      ? " bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                      : ""
                  }`}
                  placeholder="Type Your name.."
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="email"
                  className={`block mb-2 text-sm font-medium text-gray-900 ${
                    isDarkMode ? " text-white " : ""
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  name="author"
                  id="author"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                    isDarkMode
                      ? " bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                      : ""
                  }`}
                  placeholder="Enter e-mail"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="description"
                  className={`block mb-2 text-sm font-medium text-gray-900 ${
                    isDarkMode ? " text-white " : ""
                  }`}
                >
                  Review
                </label>
                <textarea
                  id="description"
                  rows="8"
                  className={`block resize-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 ${
                    isDarkMode
                      ? " bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 "
                      : ""
                  } `}
                  placeholder="Write your review here..."
                ></textarea>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="text-black bg-hsl-color text-white hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:bg-indigo-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Share
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};
