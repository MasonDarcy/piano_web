import React from 'react';

const TopNavBar = () => {
  return (
    <nav style={styles.navBar}>
      <a href="#" style={styles.navItem}>Home</a>
      <a href="#" style={styles.navItem}>Pricing</a>
      <a href="#" style={styles.navItem}>Services</a>
      <a href="#" style={styles.navItem}>About</a>
      <a href="#" style={styles.navItem}>Contact</a>
    </nav>
  );
};

const styles = {
  navBar: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 0',
  },
  navItem: {
    textDecoration: 'none',
    color: 'white',
    fontSize: '16px',
  }
};

export default TopNavBar;