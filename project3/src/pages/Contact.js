// src/components/Contact.js
import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Paper } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    let tempErrors = {};
    tempErrors.name = formData.name ? "" : "This field is required.";
    tempErrors.email = formData.email ? "" : "This field is required.";
    tempErrors.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email) ? "" : "Email is not valid.";
    tempErrors.message = formData.message ? "" : "This field is required.";

    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Handle form submission
      console.log("Form data submitted: ", formData);
      setOpen(true);
    }
  };

  const handleClose = () => {
    setOpen(false);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Container maxWidth="md">
      <Box mt={4} mb={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Me
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <Paper elevation={3} className="form-paper">
                <Box p={3}>
                  <TextField
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    {...(errors.name && { error: true, helperText: errors.name })}
                  />
                  <TextField
                    label="Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    {...(errors.email && { error: true, helperText: errors.email })}
                  />
                  <TextField
                    label="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    multiline
                    rows={4}
                    {...(errors.message && { error: true, helperText: errors.message })}
                  />
                  <Box mt={2}>
                    <Button variant="contained" color="primary" type="submit" fullWidth>
                      Send
                    </Button>
                  </Box>
                </Box>
              </Paper>
            </form>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={3} className="info-paper">
              <Box p={3} textAlign="center">
                <Typography variant="h6" component="p" gutterBottom>
                  <PhoneIcon /> Phone Number
                </Typography>
                <Typography variant="body1" paragraph>
                  060 315 0108
                </Typography>
                <Typography variant="h6" component="p" gutterBottom>
                  <EmailIcon /> Email
                </Typography>
                <Typography variant="body1" paragraph>
                  bakir.neradin@stu.ibu.edu.ba
                </Typography>
                <Typography variant="h6" component="p" gutterBottom>
                  <HomeIcon /> Address
                </Typography>
                <Typography variant="body1" paragraph>
                  Igmanski put 35
                </Typography>
                <Box mt={2}>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2878.6025839796007!2d18.205008776011724!3d43.82260217109454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbs!2sba!4v1717798289652!5m2!1sbs!2sba"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps"
                  ></iframe>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
        
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Message Sent</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Your message has been successfully sent. Thank you for contacting me!
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Container>
  );
};

export default Contact;
