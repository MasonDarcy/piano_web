import React from 'react';
import { ReactComponent as DropSVG } from '../R/drop.svg';

const Humidity = () => {
  return (
    <>
      <style>
        {`
          .humidity-container {
            position: relative;
            left: 40px;
            width: 100px; /* Narrower container for closer droplets */
            height: 200px; /* Shorter fall distance */
          }

          .drop {
            width: 30px; /* Smaller droplets */
            height: 30px; /* Smaller droplets */
            fill: #5DACD4;
            position: absolute;
            opacity: 0; /* Start faded out */
            animation: drip 3s infinite ease-in-out; /* Slower and smoother animation */
          }

          .drop1 {
            left: 50px; /* Closer together */
            animation-delay: 0s;
          }

          .drop2 {
            left: 85px; /* Closer together */
            animation-delay: 2s; /* Adjusted timing for continuous effect */
          }

          .drop3 {
            left: 125px; /* Closer together */
            animation-delay: 1s; /* Adjusted timing for continuous effect */
          }

          @keyframes drip {
            0% {
              transform: translateY(0); /* Starting at the top */
              opacity: 1;
            }
            20% {
              opacity: 1;
            }
            100% {
              transform: translateY(100px); /* Shorter fall distance */
              opacity: 0;
            }
          }
        `}
      </style>
      <div className="humidity-container">
        <DropSVG className="drop drop1" />
        <DropSVG className="drop drop2" />
        <DropSVG className="drop drop3" />
      </div>
    </>
  );
};

export default Humidity;