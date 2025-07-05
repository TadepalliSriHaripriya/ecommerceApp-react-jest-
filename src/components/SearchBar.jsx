import React from 'react';

const SearchBar = ({ searchTerm, onSearch }) => {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search for products, brands and more"
      value={searchTerm}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
};

export default SearchBar;
