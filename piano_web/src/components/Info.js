import React from 'react';
import { Paper, Typography, Container } from '@mui/material';
import Metronome from './Metronome'; // Ensure this is the correct path to your Metronome component

const Info = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Paper style={{ padding: '20px', backgroundColor: '#212121', color: '#f5f5dc' }}>
        <Typography variant="h4" component="h1" style={{ textAlign: 'center', marginBottom: '20px' }}>
          Piano Antagonists
        </Typography>

        {/* FAQ content */}
        <div>
          <Typography variant="h6" component="h2" style={{ color: '#f5f5dc' }}>
            Time
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '15px', color: '#f5f5dc' }}>
            Here's the answer to question 1...
          </Typography>
        </div>
        <div>
        </div>
        {/* You can add more questions and answers here */}
      </Paper>
       {/* Metronome component is displayed here */}
       <Metronome />
    </Container>
  );
}

export default Info;