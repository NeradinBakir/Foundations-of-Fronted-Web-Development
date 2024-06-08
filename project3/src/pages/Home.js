// src/Home.js
import React from 'react';
import { Container, Typography, Box, Grid, Button, Card, CardContent, CardMedia } from '@mui/material';
import './Home.css';
import '../components/theme';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box mt={4} mb={4}>
        <Typography variant="h4" component="h1" gutterBottom className="animated-title">
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
          <Grid item xs={12} sm={6} className="project-card">
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://www.hocu.ba/wp-content/uploads/2024/05/Screenshot-2024-05-07-171803.png" 
                alt="Project 1"
                className="project-image"
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
          <Grid item xs={12} sm={6} className="project-card">
            <Card>
              <CardMedia
                component="img"
                height="140"
                image="https://ortcom.kz/cache/imagine/1200/uploads/posts/ZWt/vbG/9na/ZWtvbG9naXlhMDIuanBnITVhNzQwMjZiZTA4YWFmZjEyMDg5YmYyMDhlM2VmZTc0.jpg" // Primer slike
                alt="Project 2"
                className="project-image" 
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
            My  NVO Skills
          </Typography>
          <Typography variant="body1" paragraph>
            - Project Management<br />
            - Volunteer Coordination<br />
            - Youth Activism<br />
            - Writing and Communication<br />
            - Leadership
          </Typography>
        </Box>

        {/* Recent Blog Posts */}
        <Box mt={4} mb={4}>
          <Typography variant="h5" component="h2" gutterBottom>
            Recent Blog Posts
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>How Volunteering Changed My Life</strong><br />
            Volunteering has opened many doors for me and allowed me to connect with amazing people. It has provided me with valuable experiences and helped me develop important skills. Through volunteering, I have gained a deeper understanding of community needs and have had the opportunity to make a meaningful impact. Read more about my journey and the lessons I've learned along the way...
          </Typography>
          <Typography variant="body1" paragraph>
            <strong>Top 10 Tips for Youth Activism</strong><br />
            Youth activism is powerful and necessary. Here are my top 10 tips for making a difference:
            <ol>
              <li>Find Your Passion: Choose a cause that you are truly passionate about.</li>
              <li>Educate Yourself: Take the time to research and understand the issues you care about.</li>
              <li>Build a Support System: Surround yourself with like-minded individuals who share your values.</li>
              <li>Take Action: Don't be afraid to speak up and take action on behalf of your cause.</li>
              <li>Stay Informed: Stay up-to-date on current events and developments related to your cause.</li>
              <li>Use Your Voice: Use social media and other platforms to raise awareness and advocate for change.</li>
              <li>Collaborate with Others: Work together with other activists and organizations to amplify your impact.</li>
              <li>Stay Committed: Real change takes time and persistence. Stay committed to your cause, even when faced with challenges.</li>
              <li>Celebrate Successes: Take the time to celebrate victories, no matter how small, and acknowledge the progress you've made.</li>
              <li>Never Give Up: Remember that your voice matters and that you have the power to make a difference.</li>
            </ol>
            By following these tips, you can become a more effective and impactful youth activist.
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
