import React, { useEffect, useState } from 'react';

const SimpleAnimation = ({ paperSize }) => {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    keys.forEach((key, index) => {
      if (key) {
        key.animate([
          { transform: 'translateY(-100px)', opacity: 0 },
          { transform: 'translateY(0)', opacity: 1 }
        ], {
          // Adjusted duration and added delay
          duration: 500, // Shorter duration for snappier feel
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)', // Custom cubic-bezier for dynamic effect
          delay: index * 35, // Staggered delay for each key
          fill: 'forwards'
        });
      }
    });
  }, [keys]);

  const keyPattern = ['white', 'black', 'white', 'black', 'white', 'white', 'black', 'white', 'black', 'white', 'black', 'white'];
  const keyboardLength = 51;
  let keysElements = [];

  // Dynamic calculation for horizontalOffset and fixedKeyHeight
  const maxOffset = 8; // Maximum offset in pixels
  const minOffset = -5; // Minimum offset in pixels
  const screenWidthThreshold = 500; // Threshold for screen width to start reducing offset

  let horizontalOffset = maxOffset;
  if (paperSize.width < screenWidthThreshold) {
    const reductionFactor = (maxOffset - minOffset) * (screenWidthThreshold - paperSize.width) / screenWidthThreshold;
    horizontalOffset = Math.max(minOffset, maxOffset - reductionFactor);
  }

  const minKeyHeight = 80; // Minimum key height in pixels
  const maxKeyHeight = 120; // Maximum key height in pixels
  const fixedKeyHeight = minKeyHeight + (maxKeyHeight - minKeyHeight) * (paperSize.width / screenWidthThreshold);
  
  // Width calculation based on paperSize
  const keyWidth = `${100 / (keyboardLength * 0.6)}%`; // Adjust factor as needed

  for (let i = 0, w = 0; i < keyboardLength; i++) {
    const isWhite = keyPattern[i % keyPattern.length] === 'white';
    const keyStyle = isWhite ? 
      { ...styles.whiteKey, width: keyWidth, height: fixedKeyHeight + 'px' } : 
      { ...styles.blackKey, width: parseFloat(keyWidth) * 0.7 + '%', height: fixedKeyHeight * 0.6 + 'px' };

    const leftPosition = isWhite ? 
      `calc(${w * parseFloat(keyWidth)}% + ${horizontalOffset}px)` : 
      `calc(${w * parseFloat(keyWidth) - parseFloat(keyWidth) * 0.35}% + ${horizontalOffset}px)`;

    keysElements.push(
      <div
        ref={el => keys[i] = el}
        style={{ ...keyStyle, left: leftPosition }}
        key={`key-${i}`}
      ></div>
    );

    if (isWhite) w++;
  }

  useEffect(() => setKeys([...keysElements]), []);

  return (
    <div style={styles.animationContainer}>
      <div style={styles.redBar}></div>
      {keysElements}
    </div>
  );
};

const styles = {
  animationContainer: {
    position: 'relative',
    height: '200px', // Adjust if needed
    width: '100%',
    zIndex: -1
  },
  whiteKey: {
    backgroundColor: 'white',
    border: '1px solid black',
    opacity: 0,
    position: 'absolute',
    top: '0',
    zIndex: 0
  },
  blackKey: {
    backgroundColor: 'black',
    opacity: 0,
    position: 'absolute',
    top: '0',
    zIndex: 1
  },
  redBar: {
    position: 'absolute',
    height: '20px',
    width: '100%',
    backgroundColor: 'darkred',
    top: 0,
    left: 0,
    borderRadius: '5px',
    zIndex: 2
  }
};

export default SimpleAnimation;