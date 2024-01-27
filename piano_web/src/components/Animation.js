import React, { useEffect, useState } from 'react';

const SimpleAnimation = () => {
  const [keys, setKeys] = useState([]);
  useEffect(() => {
    keys.forEach((key, index) => {
      if (key) {
        key.animate([
          { transform: 'translateY(-10vw)', opacity: 0 },
          { transform: 'translateY(0)', opacity: 1 }
        ], {
          duration: 800 + index * 50,
          easing: 'ease-in',
          fill: 'forwards'
        });
      }
    });
  }, [keys]); // Dependency array to re-run the effect when keys change

  const keyPattern = ['white', 'black', 'white', 'black', 'white', 'white', 'black', 'white', 'black', 'white', 'black', 'white'];
  const keyboardLength = 41; // Adjust for the desired length of the keyboard
  let keysElements = [];

  for (let i = 0, w = 0; i < keyboardLength; i++) {
    const isWhite = keyPattern[i % keyPattern.length] === 'white';
    const keyStyle = isWhite ? styles.whiteKey : styles.blackKey;
    const leftPosition = isWhite ? `${2 + w * 3.5}vw` : `${2 + w * 3.5 - 1.25}vw`;

    keysElements.push(
      <div
        ref={el => keys[i] = el}
        style={{ ...keyStyle, left: leftPosition }}
        key={`key-${i}`}
      ></div>
    );

    if (isWhite) w++;
  }

  useEffect(() => setKeys([...keysElements]), []); // Set keys on initial mount

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
    height: '20vw',
    width: '100%',
    zIndex: -1
  },
  whiteKey: {
    width: '3.5vw',
    height: '15vw',
    backgroundColor: 'white',
    border: '0.1vw solid black',
    opacity: 0,
    position: 'absolute',
    top: '0',
    zIndex: 0 // Z-index for white keys
  },
  blackKey: {
    width: '2.5vw',
    height: '8.5vw',
    backgroundColor: 'black',
    opacity: 0,
    position: 'absolute',
    top: '0',
    zIndex: 1 // Higher Z-index for black keys
  },
  redBar: {
    position: 'absolute',
    height: '2vw',
    width: '100%',
    backgroundColor: 'darkred',
    top: 0,
    left: 0,
    borderRadius: '0.5vw',
    zIndex: 2 // Ensuring the red bar is on top of all keys
  }
};

export default SimpleAnimation;