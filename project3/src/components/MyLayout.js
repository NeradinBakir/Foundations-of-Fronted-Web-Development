// MyLayout.js

import React from 'react';
import { Grid, Container, Typography } from '@mui/material';

const MyLayout = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h4" gutterBottom>
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div style={{ backgroundColor: '#f0f0f0', height: 100 }}></div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div style={{ backgroundColor: '#f0f0f0', height: 100 }}></div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div style={{ backgroundColor: '#f0f0f0', height: 100 }}></div>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <div style={{ backgroundColor: '#f0f0f0', height: 100 }}></div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyLayout;
