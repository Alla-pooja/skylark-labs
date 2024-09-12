
import React from 'react';
import { Button, List, ListItem, Typography, Box, Grid, Link } from '@mui/material';

const Vendor = () => {
  return (
    <div className='wrapper'>
      <Box
        className="vendorCard"
        sx={{
          background: 'linear-gradient(45deg,black, #0E0319)', // Mixed color background
        }}
      >
        {/* Left Side with Button and List */}
        <Box display="flex" flexDirection="column" alignItems="flex-start" width="50%">
          {/* Modified Button with increased width and link style */}
          <Button
            variant="text" // Use text variant for link style
            style={{
              marginTop: '20px',
              marginBottom: '20px',
              borderRadius: '50px',
              color: 'white',
              width: '250px', // Increase button width
              border: '1px solid white',
            }}
          >
            <Link href="/" underline="none" color="inherit" style={{ fontSize: '19px' }}>
              <span className='spanFirstWordStyle'>Vendor</span> Profile
            </Link>
          </Button>

          {/* List Items with Bullet Points */}
          <List sx={{ listStyleType: 'disc', pl: 4 }}>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography variant="body1">UEI: XLP2EG2GALY1</Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography variant="body1">UEI: XLP2EG2GALY1

                CAGE: 9JJV8

              </Typography>
            </ListItem>
            <ListItem sx={{ display: 'list-item' }}>
              <Typography variant="body1">Primary NAICS: 561621 - Security Systems Services (except Locksmiths)</Typography>
            </ListItem>
          </List>
        </Box>
        <div className='sam-image'>
        <Box display="flex" justifyContent="flex-end" alignItems="center" width="50%" pr={2}>
          <Grid container alignItems="center" justifyContent="flex-end">
            <Grid item>
              <Link to="/" style={{ display: "flex", alignItems: "center"}}>
                <img
                  src="/images/sam-logo.png"
                  alt="Src Logo"
                  style={{ width: "140px" }}
                />
              </Link>
            </Grid>
          </Grid>
        </Box>
        </div>
      </Box>
    </div>
  );
};

export default Vendor;
