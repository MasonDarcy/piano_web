import React, { useState } from 'react';
import { Paper, Typography, Container, Card, CardContent, Grid, Button } from '@mui/material';

const BookingOptions = () => {
  const [activeMenu, setActiveMenu] = useState('Phone');

  const bookingContent = {
    Phone: {
      details: 'To book an appointment by phone, please call us at: (555) 123-4567. Our staff will be happy to assist you with scheduling your appointment.',
    },
    Online: {
      details: 'For online booking, please visit our website and fill out the booking form with your preferred date and time. We will confirm your appointment via email.',
    },
  };

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Paper style={{ padding: '20px', backgroundColor: '#212121', color: '#f5f5dc', position: 'relative', paddingBottom: '25px' }}>
        <Typography variant="h4" component="h1" style={{ textAlign: 'center', marginBottom: '20px' }}>
          Book an Appointment
        </Typography>
        {/* Submenu buttons */}
        <Grid container spacing={2} justifyContent="center" style={{ marginBottom: '20px' }}>
          {Object.keys(bookingContent).map((menu) => (
            <Grid item key={menu}>
              <Button variant={activeMenu === menu ? 'contained' : 'text'} color="primary" onClick={() => setActiveMenu(menu)}>
                {menu}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
      <Card style={{ marginTop: '20px', backgroundColor: '#ffffff', padding: '20px' }}>
        <CardContent>
          <Typography variant="body1" component="p" style={{ textAlign: 'justify' }}>
            {bookingContent[activeMenu].details}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default BookingOptions;