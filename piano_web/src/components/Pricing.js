import React from 'react';
import { Paper, Typography, Container, Card, CardContent, List, ListItem, ListItemText } from '@mui/material';

const Pricing = () => {
  // Example services and prices
  const pricingDetails = [
    { service: 'Standard Tuning', price: '$80.00' },
    { service: 'Pitch raising + Multiple visit', price: '$140.00' },
    { service: 'Mechanism adjustments', price: '$20.00' },
    // Add more services and prices as needed
  ];

  // Example general policies
  const generalPolicies = [
    { title: 'Cancellation Policy and Rescheduling', description: 'If you need to reschedule or cancel, simply call or leave a message by phone' },
    { title: 'Travel fee ', description: 'If your piano is too old or damaged for tuning, there will be no charge' },
    { title: 'Payment Methods', description: 'Cash, credit card, and checks accepted' },
    // Add more policies as needed
  ];

  return (
    <Container maxWidth="md" style={{ marginTop: '20px' }}>
      <Paper style={{ padding: '20px', backgroundColor: '#212121', color: '#f5f5dc', position: 'relative', paddingBottom: '25px' }}>
        <Typography variant="h4" component="h1" style={{ textAlign: 'center', marginBottom: '20px' }}>
          Pricing & Policy
        </Typography>
        <div style={{
          height: '5px',
          backgroundColor: '#f5f5dc',
          width: 'calc(100% + 40px)',
          position: 'absolute',
          bottom: '0',
          left: '-20px'
        }}></div>
      </Paper>
      <Card style={{ marginTop: '20px', backgroundColor: '#ffffff', padding: '20px' }}>
        <CardContent>
          <Typography variant="h5" component="h2" style={{ color: '#212121', marginBottom: '15px' }}>
            General Pricing
          </Typography>
          <List>
            {pricingDetails.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item.service} secondary={item.price} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
      {/* New Card for General Policies */}
      <Card style={{ marginTop: '20px', backgroundColor: '#ffffff', padding: '20px' }}>
        <CardContent>
          <Typography variant="h5" component="h2" style={{ color: '#212121', marginBottom: '15px' }}>
            General Policies
          </Typography>
          <List>
            {generalPolicies.map((item, index) => (
              <ListItem key={index}>
                <ListItemText primary={item.title} secondary={item.description} />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
}

export default Pricing;