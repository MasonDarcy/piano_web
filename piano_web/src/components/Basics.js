import React from 'react';
import { Paper, Typography, Container, Card, CardContent, Grid } from '@mui/material';
import Metronome from './Metronome'; // Ensure this is the correct path to your Metronome component
import Snowflake from './Snowflake'; // Ensure this is the correct path to your Thermometer component
import Sun from './Sun'; // Ensure this is the correct path to your Thermometer component

const Basics = () => {
  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Paper style={{ padding: '20px', backgroundColor: '#212121', color: '#f5f5dc' }}>
        <Typography variant="h4" component="h1" style={{ textAlign: 'center', marginBottom: '20px' }}>
          Piano Preservation
        </Typography>
      </Paper>
      {/* Card for Metronome and Thermometer side by side */}
      <Card style={{ marginTop: '20px', backgroundColor: '#ffffff', padding: '20px' }}>
        <CardContent>
          <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item>
              <Sun />
            </Grid>
            <Grid item>
              <Metronome />
            </Grid>
            <Grid item>
              <Snowflake />
            </Grid>
          </Grid>
          <Typography variant="body1" style={{ marginTop: '20px', textAlign: 'center' }}>
            Your instrument is designed to be under specific tension. Tension changes with time, temperature and humidity. A piano at the wrong tension level becomes damaged.
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Basics;