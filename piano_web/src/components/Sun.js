import React, { useEffect, useRef } from 'react';

const Sun = () => {
  const topRayRef = useRef(null);
  const bottomRayRef = useRef(null);
  const leftRayRef = useRef(null);
  const rightRayRef = useRef(null);


  useEffect(() => {
    const keyframes = [
      { transform: 'scaleY(0)', opacity: 1 },
      { transform: 'scaleY(1)', opacity: 0 }
    ];
    const verticalKeyframes = [
        { transform: 'scaleY(0)', opacity: 1 },
        { transform: 'scaleY(1)', opacity: 0 }
      ];

    const timing = {
      duration: 3000, // The duration for one cycle of the animation
      iterations: Infinity, // Repeat the animation indefinitely
      easing: 'ease-out', // Start fast, then slow down
    };

    // Animate top and bottom rays
    topRayRef.current.animate(keyframes, timing);
    bottomRayRef.current.animate(keyframes, timing);

    // Adjust keyframes for horizontal rays (left and right)
    // For horizontal rays, we use scaleX for the transformation
    const horizontalKeyframes = [
      { transform: 'scaleX(0)', opacity: 1 },
      { transform: 'scaleX(1)', opacity: 0 }
    ];

    // Animate left and right rays
    leftRayRef.current.animate(horizontalKeyframes, timing);
    rightRayRef.current.animate(horizontalKeyframes, timing);
  }, []);

  return (
    <div style={{ position: 'relative', width: '150px', height: '150px' }}>
      {/* Adjusted top ray to be at a 45-degree angle */}
      <div style={{
        position: 'absolute',
        left: '50%',
        bottom: '100%', // Adjusted to start from the center of the sun
        background: '#FDB813',
        width: '2px',
        height: '50%', // Adjusted for full length
        transformOrigin: 'bottom',
        transform: 'translateX(-50%) rotate(-45deg)', // Rotated to 45 degrees
      }} ref={topRayRef} />

      {/* Bottom ray */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '70%',
        background: '#FDB813',
        width: '2px',
        height: '25%',
        transformOrigin: 'top',
        transform: 'translateX(-50%)',
      }} ref={bottomRayRef} />

      {/* Left ray */}
      <div style={{
        position: 'absolute',
        top: '50%',
        right: '70%', // Extend from the left side
        background: '#FDB813',
        height: '2px',
        width: '25%', // Full width to extend fully left
        transformOrigin: 'right',
        transform: 'translateY(-50%)',
      }} ref={leftRayRef} />

      {/* Right ray */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '70%', // Extend from the right side
        background: '#FDB813',
        height: '2px',
        width: '25%', // Full width to extend fully right
        transformOrigin: 'left',
        transform: 'translateY(-50%)',
      }} ref={rightRayRef} />

      {/* Sun */}
      <div style={{
        position: 'absolute',
        left: '50%',
        top: '50%',
        background: '#FDB813',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        transform: 'translate(-50%, -50%)',
        border: '5px solid orange', // Orange border around the sun
      }} />
      </div>
  );
};

export default Sun;