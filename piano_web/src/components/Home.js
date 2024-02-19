import React, { useRef, useEffect, useState } from 'react';
import { Container, Typography, Paper, Box, Grid, useMediaQuery, useTheme } from '@mui/material';
import SimpleAnimation from './FallingKeysAnimation';
import '../Style.css';
import logo from '../R/alpha.png';
import uwoLogo from '../R/western.png'; // Adjust the path as needed

const Home = () => {
  const paperRef = useRef(null);
  const [paperSize, setPaperSize] = useState({ width: 0, height: 0 });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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

  const getDynamicFontSize = () => {
    if (paperSize.width > 600) {
      return '2rem'; // default size
    } else {
      return `${Math.max(paperSize.width / 300, 1.2)}rem`; // dynamically smaller, with a minimum size
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px', marginBottom: '40px' }}>
      <Paper ref={paperRef} style={{ padding: '20px', textAlign: 'center', backgroundColor: '#212121', color: '#f5f5dc', position: 'relative' }}>
        <img src={logo} alt="Toronto Piano Tuning Logo" style={{ maxWidth: '100px', margin: '0 auto', display: 'block' }} />
        <Typography variant="h3" component="h1" style={{ color: '#f5f5dc', fontSize: getDynamicFontSize() }}>
          Toronto Piano Tuning
        </Typography>
        <Typography variant="subtitle1" style={{ marginBottom: '20px', color: '#f5f5dc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={uwoLogo} alt="UWO Logo" style={{ width: '25px', marginRight: '10px' }} />
          <a href="https://music.uwo.ca/about/resources/pianos.html" 
             style={{ color: 'rgba(212, 175, 55, 0.8)', textDecoration: 'underline' }} 
             target="_blank" 
             rel="noopener noreferrer">
            UWO certified
          </a>
        </Typography>
        <Typography variant="body1" style={{ color: '#f5f5dc', textAlign: 'center' }}>
          Quality and affordable tuning across the GTA
        </Typography>
      </Paper>

      <SimpleAnimation paperSize={paperSize} />

     {/* Adjusted Contact Card */}
     <Paper style={{ marginTop: isMobile ? '10px' : '30px', padding: '20px', backgroundColor: '#303030', color: '#f5f5dc' }}>
        <Typography variant="h5" component="h2" style={{ textAlign: 'center', marginBottom: '20px' }}>
          Contact
        </Typography>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
            <Typography variant="body1">
              Phone: <a href="tel:(555)123-4567" style={{ color: 'rgba(212, 175, 55, 0.8)', textDecoration: 'underline' }}>(555) 123-4567</a>
            </Typography>
            <Typography variant="body1">Email: contact@torontopianotuning.com</Typography>
          </Grid>
          <Grid item xs={12} sm={6} style={{ textAlign: 'center' }}>
            <img src={logo} alt="Logo" style={{ maxWidth: '80px', opacity: '0.5' }} />
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Home;