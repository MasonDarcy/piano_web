import React, { useEffect, useRef } from 'react';

const MetronomeShape = () => {

  const metronomeBodyStyle = {
    width: '75px',
    height: '125px',
    backgroundColor: '#ac5118',
    clipPath: 'polygon(37% 0%, 63% 0%, 100% 100%, 0% 100%)',
    borderRadius: '0 0 10px 10px',
    position: 'relative',
  };

  const insetStyle = {
    width: '45px', // Width of the metronome at the base
    height: '82.5px', // Height of the metronome
    backgroundColor: '#1a1d25', // Color for the metronome
    clipPath: 'polygon(37% 0%, 63% 0%, 100% 100%, 0% 100%)', // Trapezoid shape
    transform: 'translate(33%, 0%)', // Adjust for exact centering
    borderRadius: '0 0 10px 10px', // Rounded bottom corners
    position: 'relative', // Relative positioning for the hat
    zIndex: 3
  };
  
  const weightStyle = {
    width: '18px', // Width of the trapezoid base
    height: '10px', // Height of the trapezoid
    backgroundColor: 'grey', // Color of the weight
    position: 'absolute',
    bottom: '-5px', // Positioning slightly below the arm to appear as if it's hanging
    left: '50%', // Center horizontally relative to the arm
    transform: 'translate(-50%, -400%)', // Center the weight
    clipPath: 'polygon(0% 100%, 25% 0%, 75% 0%, 100% 100%)', // Trapezoid shape
    zIndex: 12, // Ensure the weight is above the arm (if needed)
  };

  const scale = {
    width: '7.5px', // Width of the metronome at the base
    height: '77.5px', // Height of the metronome
    backgroundColor: '#b3b4b6', // Color for the metronome
    transform: 'translate(445%, -100%)', // Adjust for exact centering
    position: 'relative', // Relative positioning for the hat
    zIndex: 4
  };

  const scaleInlay = {
    width: '1.5px', // Width of the metronome at the base
    height: '77.5px', // Height of the metronome
    backgroundColor: '#838383', // Color for the metronome
    transform: 'translate(2420%, -155%)', // Adjust for exact centering
    position: 'relative', // Relative positioning for the hat
    zIndex: 7
  };


  const hatStyle = {
    width: '19.5px', // Width of the hat
    height: '7.5px', // Height of the hat
    backgroundColor: '#ac5118', // Color of the hat to match the metronome body
    position: 'absolute', // Absolute positioning relative to the metronome body
    left: '50%', // Center horizontally
    transform: 'translate(-50%, -100%)', // Adjust for exact centering
    clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)', // Triangle shape for the hat
    zIndex: 2 // Ensure the hat is above the metronome body
  };
  

  const armStyle = {
    width: '2px', // Width of the arm
    height: '80px', // Length of the arm
    backgroundColor: '#838383', // Color of the arm
    position: 'absolute',
    top: '23px', // Positioning from the top of the metronome body
    left: '48.5%', // Center horizontally
    transformOrigin: 'bottom', // Set the pivot point at the bottom of the arm
    zIndex: 10, // Ensure the arm is above other elements
  };

  // Using a ref to access the DOM element for the arm
  const armRef = useRef(null);

  useEffect(() => {
    // CSS animation for swinging the arm
    const arm = armRef.current;
    arm.animate([
      { transform: 'rotate(-35deg)' }, // Swing to the left
      { transform: 'rotate(35deg)' }   // Swing to the right
    ], {
      duration: 900, // Duration of one swing cycle
      iterations: Infinity, // Repeat the animation indefinitely
      easing: 'ease-in-out', // Accelerate and decelerate the movement
      direction: 'alternate', // Alternate between swinging left and right
    });
  }, []);

  return (
    <div style={{ position: 'relative', display: 'inline-block', padding: '20px', overflow: 'visible'}}>
      <div style={hatStyle}></div> 
      <div style={metronomeBodyStyle}>
        <div style={insetStyle}></div>
        <div style={scale}></div>
      </div>
      <div style={scaleInlay}></div>
      <div ref={armRef} style={armStyle}>
          <div style={weightStyle}></div> {/* Weight */}
        </div>
    </div>
  );
};

export default MetronomeShape;