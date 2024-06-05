// src/components/About.js
import React from 'react';
import { Container, Typography, Box, List, ListItem, ListItemText } from '@mui/material';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box mt={4} mb={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          About Me
        </Typography>
        <Typography variant="body1" paragraph>
          Hello! I am Bakir Neradin, a 20-year-old student at International Burch University living in Hadžići. I am actively involved in volunteering and youth activism. In addition to my studies, I am passionate about leading and managing various projects.
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          My Roles and Projects
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="President of the Youth Association 'STARt' Hadžići"
              secondary="As the president, I lead the association in various initiatives and community projects aimed at empowering the youth."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Project Manager for 'Planinarsko društvo Pazarić'"
              secondary="I oversee and manage projects that promote outdoor activities and environmental awareness."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Board Member of the Cultural-Artistic Society 'Mladi Metalac Hadžići'"
              secondary="I serve on the board and lead all projects, fostering cultural and artistic development in our community."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Project Manager for Taekwondo Club Centar"
              secondary="I manage various projects to support the club's activities and enhance its reach and impact."
            />
          </ListItem>
        </List>
        <Typography variant="body1" paragraph>
          I am dedicated to offering my skills in project management and coordination to non-governmental organizations, ensuring the successful execution of their missions and goals.
        </Typography>
      </Box>
    </Container>
  );
};

export default About;
