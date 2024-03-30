import React from "react";

export const Search = ({ searchOpen, setSearchOpen }) => {
  return (
    <>
      {/* <!--==================== SEARCH ====================--> */}
      <div
        className={`search ${searchOpen ? "show-search" : ""}`}
        id="search-content"
      >
        <form action="" className="search__form">
          <i className="ri-search-line search__icon"></i>
          <input
            type="search"
            placeholder="What are you looking for?"
            className="search__input"
          />
        </form>

        <i
          className="ri-close-line search__close"
          id="search-close"
          onClick={() => {
            setSearchOpen(false);
          }}
        ></i>
      </div>
    </>
  );
};
