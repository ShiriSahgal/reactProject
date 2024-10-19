import React from 'react';
import loginImage1 from '../images/android1.png'; // First image path
import loginImage2 from '../images/android1.png'; // Second image path
import loginImage3 from '../images/android1.png'; // Third image path
import './Login.css'; // CSS for the styling

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-text-section">
        <h1>Login Screens</h1>
        <p>
          Users can quickly log in to our study-tracking app via phone or email to efficiently manage their study schedules and 
          stay focused on their academic goals.
        </p>
      </div>
      <div className="login-image-section">
        <img src={loginImage1} alt="Login Screen 1" className="login-image" id="login-image-1" />
        <img src={loginImage2} alt="Login Screen 2" className="login-image" id="login-image-2" />
        <img src={loginImage3} alt="Login Screen 3" className="login-image" id="login-image-3" />
      </div>
    </div>
  );
};

export default Login;
