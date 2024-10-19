import React from 'react';
import './Filters.css';
import imagePath from '../images/android1.png'; // Image path

const Filters = () => {
  return (
    <div className="filters-container">
      <div className="filters-text-section">
        <h1 className="filters-heading">Filters</h1>
        <p className="filters-paragraph">
          Use filters so that finding a place according to your preferences becomes easier.
        </p>
      </div>
      <div className="filters-image-section">
        <img src={imagePath} alt="Filters" className="filters-image" />
      </div>
    </div>
  );
};

export default Filters;
