import React from "react";
import { GoSearch } from "react-icons/go";
import "../SearchBar/SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="input-wrapper">
      <input
      className="search-input" 
      placeholder="Search Your Products..." 
      />
      <GoSearch id="Search-icon" />
    </div>
  );
};

export default SearchBar;
