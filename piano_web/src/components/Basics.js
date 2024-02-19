import React, { useState } from 'react';
import { Paper, Typography, Container, Card, CardContent, Grid, Button } from '@mui/material';
import Metronome from './Metronome';
import Droplet from "./Droplet";
import Snowflake from "./Snowflake";

const Basics = () => {
  // State to track which submenu is active
  const [activeMenu, setActiveMenu] = useState('Time');

  // Placeholder content for each submenu
  const content = {
    Time: {
      animation: <Metronome />,
      points: [
        'Tension changes over time',
        'Incorrect tension damages the instrument',
        'Damaged pianos may require more frequent tuning'
      ]
    },
    Temp: {
      animation: <div style={{ marginTop: '40px' }}><Snowflake /></div>,
      points: [
        'Temperature changes can warp wood',
        'Sudden changes in temperature will affect tension & tuning',
        'Ideal room temperature for pianos is between 20°C and 22°C'
      ]
    },
    Humidity: {
      animation: <Droplet />,
      points: [
        'High humidity can lead to sticky keys and other component issues',
        'Low humidity can cause cracks in the wood',
        'Maintain relative humidity between 45% of 70% for the instrument'
      ]
    }
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Paper style={{ padding: '20px', backgroundColor: '#212121', color: '#f5f5dc', position: 'relative', paddingBottom: '25px' }}> {/* Increased paddingBottom to accommodate the red bar */}
        <Typography variant="h4" component="h1" style={{ textAlign: 'center', marginBottom: '20px' }}>
          Piano Preservation Tips
        </Typography>
        {/* Submenu buttons */}
        <Grid container spacing={2} justifyContent="center" style={{ marginBottom: '20px' }}> {/* Ensure there's space for the red bar below */}
          {Object.keys(content).map((menu) => (
            <Grid item key={menu}>
              <Button variant={activeMenu === menu ? 'contained' : 'text'} color="primary" onClick={() => setActiveMenu(menu)}>
                {menu}
              </Button>
            </Grid>
          ))}
        </Grid>
        {/* Red bar placed at the bottom of the Paper component */}
        <div style={{
          height: '5px', // Thickness of the red bar
          backgroundColor: 'f5f5dc', // Color of the bar
          width: 'calc(100% + 40px)', // Extend to cover padding
          position: 'absolute',
          bottom: '0', // Align to the bottom
          left: '-20px' // Counteract Paper padding
        }}></div>
      </Paper>
      <Card style={{ marginTop: '20px', backgroundColor: '#ffffff', padding: '20px' }}>
        <CardContent>
          <Grid container spacing={2} justifyContent="center" alignItems="flex-start" direction="row-reverse">
            <Grid item xs={12} sm={8}>
              <div style={{ marginTop: '30px', textAlign: 'justify', marginLeft: '20px' }}>
                {content[activeMenu].points.map((point, index) => (
                  <p key={index}>• {point}</p>
                ))}
              </div>
            </Grid>
            <Grid item xs={12} sm={4} style={{ textAlign: 'center' }} order={{ xs: 1, sm: 2 }}>
              {content[activeMenu].animation}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Basics;