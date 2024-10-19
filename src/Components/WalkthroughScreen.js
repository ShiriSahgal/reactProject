import React from 'react';
import './WalkthroughScreen.css';
import androidImage from '../images/android1.png'; // Use the same image 4 times as required

const WalkthroughScreen = () => {
  return (
    <div className="walkthrough-container">
      {/* Heading */}
      <h2 className="walkthrough-heading">Walkthrough Screens</h2>

      {/* Description */}
      <p className="walkthrough-description">
        Onboarding introduces the user to the application and helps to engage and onboard new users. 
        It is used not only at the first launch, but also when adding new functions to the application.
      </p>

      {/* Images Section */}
      <div className="image-row">
        <img src={androidImage} alt="Walkthrough 1" className="walkthrough-image" />
        <img src={androidImage} alt="Walkthrough 2" className="walkthrough-image" />
        <img src={androidImage} alt="Walkthrough 3" className="walkthrough-image" />
        <img src={androidImage} alt="Walkthrough 4" className="walkthrough-image" />
      </div>
    </div>
  );
};

export default WalkthroughScreen;
