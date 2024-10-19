import React from 'react';
import aboutImage from '../images/android1.png'; // Path to your image
import './About.css'; // Import the corresponding CSS file

const About = () => {
  return (
    <div className="about-section">
      <div className="about-content">
        <div className="text">
          <h2>About the Project</h2>
          <p>
          Target is a study-tracking app designed to help students manage their academic activities effectively. Users can set timers to log 
          their reading, revision, study sessions, sleep, and question paper solving. The app also features a live tracker to show how many 
          other students are studying at the same time, along with options to create notes for various branches, especially for GATE exam 
          preparation. Additionally, it includes a countdown for exam days and a live full-screen clock, making it easier for students to 
          stay focused and organized.
          </p>
        </div>
        <div className="image-container1">
          <img src={aboutImage} alt="About Us" className="about-image" />
        </div>
      </div>
    </div>
  );
};

export default About;
