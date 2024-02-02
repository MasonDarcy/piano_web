import React from 'react';
// Import the SVG file as a component
import { ReactComponent as SnowflakeSVG } from '../R/flake.svg';

const Snowflake = () => {
  const snowflakeStyle = {
    fill: '#89CFF0', // Light blue color
    width: '75px', // Adjust the size as needed.
    height: '75px', // Adjust the size as needed.
    animation: 'rotate 20s linear infinite', // Apply the rotation animation
  };

  return (
    <>
      <style>
        {`
          @keyframes rotate {
            from {
              transform: rotate(0deg);
            }
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
      <SnowflakeSVG style={snowflakeStyle} />
    </>
  );
};

export default Snowflake;