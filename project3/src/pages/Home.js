// src/components/Home.js
import React from 'react';
import { Container, Typography, Box, Grid, Button, Card, CardContent, CardMedia } from '@mui/material';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box mt={4} mb={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Welcome to my portfolio
        </Typography>
        <Typography variant="body1" paragraph>
          I am Bakir Neradin, a student at International Burch University. Here you can learn more about me, my projects, and how to contact me.
        </Typography>
        
        {/* Highlight Projects */}
        <Typography variant="h5" component="h2" gutterBottom>
          Highlighted Projects
        </Typography>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://www.hocu.ba/wp-content/uploads/2024/05/Screenshot-2024-05-07-171803.png"
                alt="Project 1"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Summer programming school
                </Typography>
                <Typography variant="body2" color="textSecondary">
                YA STARt organizes a programming school for high school students at the Secondary School Center Hadžići. The program is designed to provide young people with both fundamental and advanced skills in programming. Participants will learn popular programming languages such as Python, Java, and C++, and will be introduced to the basics of web application development and software engineering. Through interactive lessons and practical projects, students will develop their logical thinking and problem-solving abilities. The goal of the school is to prepare students for future challenges in the IT sector and to foster their interest in technological disciplines
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://af.unmo.ba/media/1130/environment-vision.jpg?anchor=center&mode=crop&width=1200&height=630&rnd=132040210830000000"
                alt="Project 2"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Ecology as a Way of Life
                </Typography>
                <Typography variant="body2" color="textSecondary">
                The project "Ecology as a Way of Life" aims to support the underprivileged through the collection, compression, and sale of plastic. By recycling plastic waste, the project generates funds to aid those in need. Additionally, it focuses on educating the community and raising awareness about the importance of environmental conservation and sustainable living practices. The initiative not only addresses environmental issues but also promotes social responsibility and community involvement.Through this project, individuals are empowered to actively participate in environmental preservation efforts while simultaneously addressing social challenges. 
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Skills Section */}
        <Box mt={4} mb={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            My Skills
          </Typography>
          <Typography variant="body1" paragraph>
            - Project Management<br />
            - Volunteer Coordination<br />
            - Youth Activism<br />
            - Writing and Communication<br />
            - Leadership
          </Typography>
        </Box>

        {/* Testimonials */}
        <Box mt={4} mb={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            Testimonials
          </Typography>
          <Typography variant="body1" paragraph>
            "Bakir is a dedicated and talented individual who excels in managing projects and leading teams." - Jane Doe
          </Typography>
          <Typography variant="body1" paragraph>
            "His commitment to youth activism is truly inspiring." - John Smith
          </Typography>
        </Box>

        {/* Call to Action */}
        <Box mt={4} mb={4}>
          <Button variant="contained" color="primary" href="/about">
            Learn More About Me
          </Button>
          <Button variant="outlined" color="secondary" href="/contact" style={{ marginLeft: '10px' }}>
            Contact Me
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
