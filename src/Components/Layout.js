// src/Layout.js
import React from 'react';
import screenImage from '../images/android1.png'; // Image path for the screens
import './Layout.css'; // Importing the CSS file

const Layout = () => {
  return (
    <div className="layout-container">
      {/* Layout Header */}
      <h1 className="layout-heading">Other Screens</h1>

      {/* Image Section */}
      <div className="image-container">
        {/* First Half Image */}
        <img src={screenImage} alt="Screen 1" className="screen-image half-image" />
        {/* Full Images */}
        <img src={screenImage} alt="Screen 2" className="screen-image" />
        <img src={screenImage} alt="Screen 3" className="screen-image" />
        <img src={screenImage} alt="Screen 4" className="screen-image" />
        <img src={screenImage} alt="Screen 5" className="screen-image" />
        <img src={screenImage} alt="Screen 6" className="screen-image" />
        {/* Last Half Image */}
        <img src={screenImage} alt="Screen 7" className="screen-image half-image" />
      </div>
    </div>
  );
};

export default Layout;
