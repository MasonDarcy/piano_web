const MetronomeShape = () => {
  const metronomeBodyStyle = {
    width: '150px', // Width of the metronome at the base
    height: '250px', // Height of the metronome
    backgroundColor: '#ac5118', // Color for the metronome
    clipPath: 'polygon(37% 0%, 63% 0%, 100% 100%, 0% 100%)', // Trapezoid shape
    borderRadius: '0 0 10px 10px', // Rounded bottom corners
    position: 'relative', // Relative positioning for the hat
  };

  const insetStyle = {
    width: '90px', // Width of the metronome at the base
    height: '165px', // Height of the metronome
    backgroundColor: '#1a1d25', // Color for the metronome
    clipPath: 'polygon(37% 0%, 63% 0%, 100% 100%, 0% 100%)', // Trapezoid shape
    transform: 'translate(33%, -150%)', // Adjust for exact centering
    borderRadius: '0 0 10px 10px', // Rounded bottom corners
    position: 'relative', // Relative positioning for the hat
    zIndex: 3
  };

  const scale = {
    width: '15px', // Width of the metronome at the base
    height: '155px', // Height of the metronome
    backgroundColor: '#b3b4b6', // Color for the metronome
    transform: 'translate(445%, -259.5%)', // Adjust for exact centering
    position: 'relative', // Relative positioning for the hat
    zIndex: 4
  };

  const scaleInlay = {
    width: '3px', // Width of the metronome at the base
    height: '155px', // Height of the metronome
    backgroundColor: '#838383 ', // Color for the metronome
    transform: 'translate(2415%, -359.5%)', // Adjust for exact centering
    position: 'relative', // Relative positioning for the hat
    zIndex: 4
  };


  const hatStyle = {
    width: '39px', // Width of the hat
    height: '15px', // Height of the hat
    backgroundColor: '#ac5118', // Color of the hat to match the metronome body
    position: 'absolute', // Absolute positioning relative to the metronome body
    left: '50%', // Center horizontally
    transform: 'translate(-50%, -100%)', // Adjust for exact centering
    clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)', // Triangle shape for the hat
    zIndex: 2 // Ensure the hat is above the metronome body
  };
  

  return (
    <div style={{ position: 'relative', display: 'inline-block', padding: '20px'}}>
      <div style={hatStyle}></div> {/* Hat */}
      <div style={metronomeBodyStyle}></div>
      <div style={insetStyle}></div>
      <div style={scale}></div>
      <div style={scaleInlay}></div>

    </div>
  );
};

export default MetronomeShape;