import React from 'react';
import './TypographyColorScheme.css';

const TypographyColorScheme = () => {
  return (
    <div className="typography-section">
      {/* Watermark text */}
      <div className="watermark">SF Pro Display</div>

      <h2 className="typography-heading">Typography &amp; Color Scheme</h2>
      <p className="typography-description">
        Building Consistency through typography and color palettes
      </p>

      <div className="typography-font">
        <h3 className="font-heading">SF Pro Display</h3>
        <div className="font-weights">
          <div className="font-bold">Bold</div>
          <div className="font-medium">Medium</div>
          <div className="font-regular">Regular</div>
        </div>

        {/* Single Text Sample Block */}
        <div className="font-sample">
          <p className="font-sample-text">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
          <p className="font-sample-text">abcdefghijklmnopqrstuvwxyz</p>
        </div>
      </div>

      <div className="color-palette-container">
        {/* Color Circles */}
        <div className="color-circle" style={{ backgroundColor: '#008080' }}>
          <span className="color-code">#008080</span>
        </div>
        <div className="color-circle" style={{ backgroundColor: '#B2D8D8' }}>
          <span className="color-code">#B2D8D8</span>
        </div>
        <div className="color-circle" style={{ backgroundColor: '#E6F5F3' }}>
          <span className="color-code">#E6F5F3</span>
        </div>
        <div className="color-circle" style={{ backgroundColor: '#FFFFFF' }}>
          <span className="color-code">#FFFFFF</span>
        </div>
        <div className="color-circle" style={{ backgroundColor: '#F2F2F2' }}>
          <span className="color-code">#F2F2F2</span>
        </div>
        <div className="color-circle" style={{ backgroundColor: '#E5E5E5' }}>
          <span className="color-code">#E5E5E5</span>
        </div>
        {/* Black Circle with 'dark' class */}
        <div className="color-circle dark" style={{ backgroundColor: '#000000' }}>
          <span className="color-code">#000000</span>
        </div>
      </div>
    </div>
  );
};

export default TypographyColorScheme;
