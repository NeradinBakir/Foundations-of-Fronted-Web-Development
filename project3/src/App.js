import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import MyLayout from '../src/components/MyLayout';
import Footer from '../src/components/Footer'; 

function App() {
  return (
    <Router>
      {/* AppBar sa promijenjenom bojom */}
      <AppBar position="static" sx={{ backgroundColor: '	#3939a1' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Portfolio
          </Typography>
          <Button color="inherit" href="/">Home</Button>
          <Button color="inherit" href="/about">About</Button>
          <Button color="inherit" href="/contact">Contact</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <MyLayout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
      {/* Dodavanje footera na dno stranice */}
      <Footer />
    </Router>
  );
}

export default App;
