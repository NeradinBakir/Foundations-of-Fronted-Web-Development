import React from 'react';
import { Container, Typography, Box, Grid, Card, CardMedia, Avatar, Button } from '@mui/material';
import { Facebook , Instagram } from '@mui/icons-material';
import './About.css';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box mt={4} mb={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Me
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Avatar
              alt="Bakir Neradin"
              src="profilna-slika.jpg"
              className="avatar"
              style={{ width: 250, height: 250 }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Typography variant="body1" paragraph>
              I am Bakir Neradin, a 20-year-old student at International Burch University. My passion lies in volunteering and youth activism. Currently, I hold the position of president at the Youth Association "STARt" in Hadžići, where I lead various projects aimed at empowering young people and making a positive impact on our community.
            </Typography>
            <Typography variant="body1" paragraph>
              Apart from my involvement with "STARt," I am actively engaged in other organizations as well. I serve as a project manager for the Mountaineering Society "Pazarić," organizing outdoor activities and environmental initiatives. Additionally, I am a board member of the Cultural and Artistic Society "Mladi Metalac" in Hadžići, where I oversee the coordination of cultural events and performances. Furthermore, I take on the role of project manager at the Taekwondo Club "Center," leading various initiatives to promote martial arts and physical fitness among youth.
            </Typography>
            <Typography variant="body1" paragraph>
              In my free time, I enjoy exploring new technologies, participating in hackathons, and contributing to open-source projects. I am also passionate about photography and travel, seeking inspiration and new perspectives through my adventures.
            </Typography>
          </Grid>
        </Grid>

        <Box mt={4} mb={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            Skills
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Typography variant="body1" paragraph>
                Programming:
              </Typography>
              <Typography variant="body2" paragraph>
                Python, JavaScript, C++
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body1" paragraph>
                Web Development:
              </Typography>
              <Typography variant="body2" paragraph>
                HTML, CSS, React, Node.js
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="body1" paragraph>
                Other:
              </Typography>
              <Typography variant="body2" paragraph>
               Photoshop
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Typography variant="h5" component="h2" gutterBottom>
          Gallery
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={6} sm={3}>
            <Card className="gallery-card">
              <CardMedia
                component="img"
                image="osam.jpg"
                alt="Image 1"
                style={{ height: 250 }}
              />
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card className="gallery-card">
              <CardMedia
                component="img"
                image="tri.jpg"
                alt="Image 2"
                style={{ height: 250 }}
              />
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card className="gallery-card">
              <CardMedia
                component="img"
                image="sest.jpg"
                alt="Image 3"
                style={{ height: 250 }}
              />
            </Card>
          </Grid>
          <Grid item xs={6} sm={3}>
            <Card className="gallery-card">
              <CardMedia
                component="img"
                image="jedan.jpg"
                alt="Image 4"
                style={{ height: 250 }}
              />
            </Card>
          </Grid>
        </Grid>

        <Box mt={4} textAlign="center">
          <Button href="https://hr-hr.facebook.com/bakir.neradin.9/" target="_blank" startIcon={<Facebook />} sx={{ marginRight: 2 }}>
            Facebook
          </Button>
          <Button href="https://www.instagram.com/neradynn/?next=%2Fp%2FCaI0wOxpeKP%2F&hl=af" target="_blank" startIcon={<Instagram />} sx={{ marginRight: 2 }}>
            Instagram
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
