import React from 'react';
import { Container, Typography, Paper } from '@mui/material';
import Animation from './Animation'; // Adjust the import path as needed
import '../Style.css';

const Home = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Paper style={{ padding: '20px', textAlign: 'center', backgroundColor: '#212121', color: '#f5f5dc' }}>
        <Typography variant="h3" component="h1" style={{ color: '#f5f5dc' }}>
          Toronto Piano Tuning
        </Typography>
        <Typography variant="subtitle1" style={{ marginBottom: '20px', color: '#f5f5dc' }}>
          Certified by <a href="https://music.uwo.ca/about/resources/pianos.html" style={{ color: '#f5f5dc' }} target="_blank" rel="noopener noreferrer">UWO</a>
        </Typography>
        <Typography variant="body1" style={{ color: '#f5f5dc', textAlign: 'center' }}>
          Our mission is to bring quality and affordable tuning to pianists across the GTA.
        </Typography>
      </Paper>

      <Animation />
    </Container>
  );
};

export default Home;