import React from 'react';
import './Screens.css'; // Make sure this path is correct

function Screens() {
  return (
    <div className="screens-container">
      <h1>Application Flow</h1>
      
      {/* Center Main Screenshot */}
      <div className="main-image-container">
        <img src="../images/android1.png" alt="Main App Screenshot" className="main-image" />
      </div>

      {/* Tabs with Flowchart Arrows */}
      <div className="tab-flowchart">
        <div className="tab-item">
          <img src="../images/home-tab.png" alt="Home Tab" />
          <p>Home</p>
        </div>

        <div className="arrow">
          <img src="../images/arrow.png" alt="Arrow to Stopwatch" />
        </div>

        <div className="tab-item">
          <img src="../images/stopwatch-tab.png" alt="Stopwatch Tab" />
          <p>Stopwatch</p>
        </div>

        <div className="arrow">
          <img src="../images/arrow.png" alt="Arrow to Live Clock" />
        </div>

        <div className="tab-item">
          <img src="../images/liveclock-tab.png" alt="Live Clock Tab" />
          <p>Live Clock</p>
        </div>

        <div className="arrow">
          <img src="../images/arrow.png" alt="Arrow to Notes" />
        </div>

        <div className="tab-item">
          <img src="../images/notes-tab.png" alt="Notes Tab" />
          <p>Notes</p>
        </div>
      </div>
    </div>
  );
}

export default Screens;
