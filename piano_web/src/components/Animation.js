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
          duration: 800 + index * 50,
          easing: 'ease-in',
          fill: 'forwards'
        });
      }
    });
  }, [keys]);

  const keyPattern = ['white', 'black', 'white', 'black', 'white', 'white', 'black', 'white', 'black', 'white', 'black', 'white'];
  const keyboardLength = 48;
  let keysElements = [];

  // Calculate key dimensions based on paperSize
  const keyWidth = paperSize.width / 13; // Example factor, adjust as needed
  const keyHeight = paperSize.height / 1.3; // Example factor, adjust as needed

  for (let i = 0, w = 0; i < keyboardLength; i++) {
    const isWhite = keyPattern[i % keyPattern.length] === 'white';
    const keyStyle = isWhite ? { ...styles.whiteKey, width: keyWidth + 'px', height: keyHeight + 'px' } : { ...styles.blackKey, width: keyWidth * 0.7 + 'px', height: keyHeight * 0.6 + 'px' }; // Adjust black key dimensions accordingly
    const leftPosition = isWhite ? `${w * keyWidth}px` : `${w * keyWidth - keyWidth * 0.35}px`;

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
    height: '200px', // Fixed height, adjust if needed
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