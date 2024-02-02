import React from 'react';
import { Paper, Typography, Container } from '@mui/material';
import Metronome from './Metronome'; // Adjust the path if Metronome is not in the same directory

const FAQ = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Paper style={{ padding: '20px', backgroundColor: '#212121', color: '#f5f5dc' }}>
        <Typography variant="h4" component="h1" style={{ textAlign: 'center', marginBottom: '20px' }}>
          Frequently Asked Questions
        </Typography>

        {/* Example placement of the Metronome component */}
        <Metronome />

        <div>
          <Typography variant="h6" component="h2" style={{ color: '#f5f5dc' }}>
            Question 1
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '15px', color: '#f5f5dc' }}>
            Answer to question 1...
          </Typography>
        </div>
        <div>
          <Typography variant="h6" component="h2" style={{ color: '#f5f5dc' }}>
            Question 2
          </Typography>
          <Typography variant="body1" style={{ marginBottom: '15px', color: '#f5f5dc' }}>
            Answer to question 2...
          </Typography>
        </div>
        {/* Add more questions as needed */}
      </Paper>
    </Container>
  );
}

export default FAQ;