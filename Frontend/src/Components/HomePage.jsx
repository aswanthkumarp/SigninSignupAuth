import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

import PersonIcon from '@mui/icons-material/Person';

export default function HomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ display: 'flex', flexDirection: 'column', height: '10%' }}>
        <Toolbar
          sx={{
            alignItems: 'flex-start', 
            justifyContent: 'center', 
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <PersonIcon/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        User DashBoard App
          </Typography>
          <Button href='/signin' color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
