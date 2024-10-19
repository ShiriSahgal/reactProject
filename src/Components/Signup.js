import React from 'react';
import signupImage1 from '../images/android1.png'; // First image path
import signupImage2 from '../images/android1.png'; // Second image path
import signupImage3 from '../images/android1.png'; // Third image path
import './Signup.css'; // CSS for the styling

const Signup = () => {
  return (
    <div className="signup-container">
      <div className="text-section">
        <h1>Sign up Screens</h1>
        <p>
        Users can quickly register for our study-tracking app via phone or email to efficiently manage their study schedules and 
        stay focused on their academic goals.
        </p>
      </div>
      <div className="image-section">
        <img src={signupImage1} alt="Signup Screen 1" className="signup-image" id="image-1" />
        <img src={signupImage2} alt="Signup Screen 2" className="signup-image" id="image-2" />
        <img src={signupImage3} alt="Signup Screen 3" className="signup-image" id="image-3" />
      </div>
    </div>
  );
};

export default Signup;
