import React from 'react';
import { Typography, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#3939a1', color: '#fff', textAlign: 'center', py: 2 }}>
      <Typography variant="body1" sx={{ color: '#fff', textAlign: 'center' }}>
        Bakir Neradin
      </Typography>
    </Box>
  );
};

export default Footer;
