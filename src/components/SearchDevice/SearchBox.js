import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBox() {
  const handleSearchClick = () => {
    window.open('https://varia.vantaa.fi/fi', 'Search Pop-up', 'width=500,height=400');
  };

  return (
    <div className="SearchBox-container">
      <button className="SearchBox-button" onClick={handleSearchClick}>
        Hae Laitetta
        <span className="SearchBox-icon">
        <FaSearch />
        </span>
      </button>
    </div>
  );
}

export default SearchBox;
