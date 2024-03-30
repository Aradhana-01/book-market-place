import { CustomNavbar } from "./CustomNavbar";
import { Footer } from "./Footer";
import { useTheme } from "./ThemeContext";

export const ListBook = () => {
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
            Add Book
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
                  Book Title
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
                  placeholder="Type Book name.."
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="author"
                  className={`block mb-2 text-sm font-medium text-gray-900 ${
                    isDarkMode ? " text-white " : ""
                  }`}
                >
                  Author Name
                </label>
                <input
                  type="text"
                  name="author"
                  id="author"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                    isDarkMode
                      ? " bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                      : ""
                  }`}
                  placeholder="Author Name"
                  required
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="price"
                  className={`block mb-2 text-sm font-medium text-gray-900 ${
                    isDarkMode ? " text-white " : ""
                  }`}
                >
                  Price
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                    isDarkMode
                      ? " bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                      : ""
                  }`}
                  placeholder="500"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="genre"
                  className={`block mb-2 text-sm font-medium text-gray-900 ${
                    isDarkMode ? " text-white " : ""
                  }`}
                >
                  Genre
                </label>
                <select
                  id="genre"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 ${
                    isDarkMode
                      ? " bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500  "
                      : ""
                  } `}
                >
                  <option defaultValue="">Select Genre</option>
                  <option value="Horror">Horror</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Adventure">Adventure</option>
                  <option value="Mystery">Mystery</option>
                  <option value="Romance">Romance</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="pages"
                  className={`block mb-2 text-sm font-medium text-gray-900 ${
                    isDarkMode ? " text-white " : ""
                  }`}
                >
                  Pages
                </label>
                <input
                  type="number"
                  name="pages"
                  id="pages"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                    isDarkMode
                      ? " bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 "
                      : ""
                  }`}
                  placeholder="Ex. 126"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="country"
                  className={`block mb-2 text-sm font-medium text-gray-900 ${
                    isDarkMode ? "text-white " : ""
                  }`}
                >
                  Country of Production
                </label>
                <input
                  type="text"
                  name="country"
                  id="country"
                  className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 ${
                    isDarkMode
                      ? " bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500"
                      : ""
                  }`}
                  placeholder="Ex. India"
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
                  Description
                </label>
                <textarea
                  id="description"
                  rows="8"
                  className={`block resize-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 ${
                    isDarkMode
                      ? " bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-primary-500 focus:border-primary-500 "
                      : ""
                  } `}
                  placeholder="Write a book description here..."
                ></textarea>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                type="submit"
                className="text-black bg-hsl-color text-white hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:bg-indigo-400 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Add Book
              </button>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};
