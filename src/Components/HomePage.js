import React from 'react'; 
import iosImage from '../images/android1.png'; // First image path
import secondImage from '../images/android1.png'; // Second image path
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="content">
        {/* Text Container */}
        <div className="text">
          <h1 className="title">Android Presentation</h1>
          <p className="paragraph">
            Target App is a platform designed to help students efficiently plan and manage their daily study schedules. 
            It allows them to track their study plans, monitor syllabus completion status, and organize their learning process more effectively.
            By using this platform, students can create a structured approach to their studies, ensuring better time management and consistent 
            progress towards their academic goals.
          </p>
        </div>

        {/* Images Container */}
        <div className="images-container">
          <img src={iosImage} alt="First Presentation" className="image first-image" />
          <img src={secondImage} alt="Second Presentation" className="image second-image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
