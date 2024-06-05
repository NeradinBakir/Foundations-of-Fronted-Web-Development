// src/components/Contact.js
import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';

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
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
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
            <Button variant="contained" color="primary" type="submit">
              Send
            </Button>
          </Box>
        </form>
        
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
