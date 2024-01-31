import React, { useRef, useEffect, useState } from 'react';
import { Container, Typography, Paper } from '@mui/material';
import SimpleAnimation from './Animation'; 
import '../Style.css';
import logo from '../R/alpha.png'; 

const Home = () => {
  const paperRef = useRef(null);
  const [paperSize, setPaperSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const handleResize = () => {
      if (paperRef.current) {
        const { offsetWidth, offsetHeight } = paperRef.current;
        setPaperSize({ width: offsetWidth, height: offsetHeight });
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Function to calculate font size based on paper width
  const getDynamicFontSize = () => {
    if (paperSize.width > 600) {
      return '2rem'; // default size
    } else {
      return `${Math.max(paperSize.width / 300, 1.2)}rem`; // dynamically smaller, with a minimum size
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Paper ref={paperRef} style={{ padding: '20px', textAlign: 'center', backgroundColor: '#212121', color: '#f5f5dc', position: 'relative' }}>
        <img src={logo} alt="Toronto Piano Tuning Logo" style={{ maxWidth: '100px', margin: '0 auto', display: 'block' }} />
        <Typography variant="h3" component="h1" style={{ color: '#f5f5dc', fontSize: getDynamicFontSize() }}>
          Toronto Piano Tuning
        </Typography>
        <Typography variant="subtitle1" style={{ marginBottom: '20px', color: '#f5f5dc' }}>
          Certified by <a href="https://music.uwo.ca/about/resources/pianos.html" style={{ color: '#f5f5dc' }} target="_blank" rel="noopener noreferrer">UWO</a>
        </Typography>
        <Typography variant="body1" style={{ color: '#f5f5dc', textAlign: 'center' }}>
          Quality and affordable tuning for pianists across the GTA.
        </Typography>
      </Paper>

      <SimpleAnimation paperSize={paperSize} />
    </Container>
  );
};

const styles = {
  symbolStyle: {
    color: 'rgba(245, 245, 220, 0.2)',
    fontSize: '10rem',
    position: 'absolute',
    top: '50%',
    left: '10%',
    transform: 'translateY(-50%)',
    zIndex: 0
  }
};

export default Home;