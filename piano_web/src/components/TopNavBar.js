import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button'; // Make sure to import Button
import HomeIcon from '@mui/icons-material/Home';
import PricingIcon from '@mui/icons-material/AttachMoney'; // Example icon for Pricing
import ServicesIcon from '@mui/icons-material/Build'; // Example icon for Services
import AboutIcon from '@mui/icons-material/Info'; // Example icon for About
import ContactIcon from '@mui/icons-material/ContactMail'; // Example icon for Contact
import useMediaQuery from '@mui/material/useMediaQuery';

const TopNavBar = () => {
  const isMobile = useMediaQuery('(max-width:600px)'); // Adjust the breakpoint as needed

  return (
    <AppBar position="static" style={{ backgroundColor: '#212121' }}>
      <Toolbar style={styles.toolbar}>
        {isMobile ? (
          <>
            <IconButton color="inherit" href="#"><HomeIcon /></IconButton>
            <IconButton color="inherit" href="#"><PricingIcon /></IconButton>
            <IconButton color="inherit" href="#"><ServicesIcon /></IconButton>
            <IconButton color="inherit" href="#"><AboutIcon /></IconButton>
            <IconButton color="inherit" href="#"><ContactIcon /></IconButton>
          </>
        ) : (
          <>
            <Button color="inherit" href="#" style={styles.navButton}>Home</Button>
            <Button color="inherit" href="#" style={styles.navButton}>Pricing</Button>
            <Button color="inherit" href="#" style={styles.navButton}>Services</Button>
            <Button color="inherit" href="#" style={styles.navButton}>About</Button>
            <Button color="inherit" href="#" style={styles.navButton}>Contact</Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

const styles = {
  toolbar: {
    justifyContent: 'space-around',
  },
  navButton: {
    color: '#FFF',
    margin: '0 10px',
  }
};

export default TopNavBar;