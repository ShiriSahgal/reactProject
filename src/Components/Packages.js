// src/Packages.js
import React from 'react';
import packageImage1 from '../images/android1.png'; // Image path for the packages
import packageImage2 from '../images/android1.png'; // Reusing the same image for simplicity
import packageImage3 from '../images/android1.png';
import './Packages.css'; // CSS styling for the component

const Packages = () => {
  return (
    <div className="packages-container">
      {/* Packages Header */}
      <h1 className="packages-heading">Packages</h1>

      {/* Description Section */}
      <p className="packages-description">
        Explore a variety of packages tailored to your needs.
      </p>
      <p className="packages-description">
        Choose the best options to enjoy a wonderful experience.
      </p>

      {/* Image Section */}
      <div className="packages-image-container">
        {/* First and Third Images Aligned */}
        <img src={packageImage1} alt="Package 1" className="packages-image" />
        <img src={packageImage3} alt="Package 3" className="packages-image packages-middle-image" />

        {/* Middle Image Slightly Lower */}
        <img src={packageImage2} alt="Package 2" className="packages-image" />
      </div>
    </div>
  );
};

export default Packages;
