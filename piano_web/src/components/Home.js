import React, { useRef, useEffect, useState } from 'react';
import { Container, Typography, Paper } from '@mui/material';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SimpleAnimation from './Animation'; // Adjust the import path as needed
import '../Style.css';

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

    // Call handleResize initially and on every window resize
    handleResize();
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Paper ref={paperRef} style={{ padding: '20px', textAlign: 'center', backgroundColor: '#212121', color: '#f5f5dc', position: 'relative' }}>
        <MusicNoteIcon style={styles.symbolStyle} />
        <Typography variant="h3" component="h1" style={{ color: '#f5f5dc' }}>
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