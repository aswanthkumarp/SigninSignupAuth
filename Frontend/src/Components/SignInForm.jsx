import React, { useState } from 'react';
import axios from 'axios';
import { Grid, Typography, Button, TextField, Box } from '@mui/material';
import HomePage from './HomePage';
import "./SignInForm.css";

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
       const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post('http://localhost:5000/api/signin', userData);
      console.log('Signin successful:', response.data);

    
      // const authToken = response.data.token;
      // console.log(authToken);
     
      // localStorage.setItem('authToken', authToken);
      // console.log(authToken);

  
       window.location.href = '/dashboard';
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.message);
      } else {
        setErrorMessage('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div>
      <HomePage />
      <Grid container spacing={2} sx={{backgroundColor:'rebeccapurple'}}>
        <Grid item xs={12} sm={8}>
          <div className="content">
            <Typography variant="h4">Welcome to Our Website</Typography>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac velit vel est fringilla mattis.
            </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={4}>
          <div className="signin-container">
            <div className="signin-form">
              <Typography variant="h5">Sign In</Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  label="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  fullWidth
                  margin="normal"
                  required
                />
                <TextField
                  label="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  fullWidth
                  margin="normal"
                  required
                />
                <Button type="submit" variant="contained" color="primary" fullWidth>
                  Sign In
                </Button>
              </form>
              {errorMessage && <p className="error-message">{errorMessage}</p>}
              <Box mt={2}>
                <Typography>
                  Don't have an account? <a href="/signup">Create an Account</a>
                </Typography>
              </Box>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default SignInForm;
