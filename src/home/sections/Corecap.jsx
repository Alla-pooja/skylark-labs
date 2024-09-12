import React, { useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Backdrop } from "@material-ui/core";
import { makeStyles } from '@mui/styles';
import { useTheme, useMediaQuery } from '@mui/material';

const useStyles = makeStyles((theme) => ({
  keyFeatures: {
    fontWeight: 400,
    color: '#b0b0b0',
    lineHeight: 'normal',
    boxSizing: 'border-box',
    border: '2px solid #e5e7eb1c',
    borderRadius: '8px',
    height: '100%',
    background: 'linear-gradient(0deg, hsla(0, 0%, 100%, .06), hsla(0, 0%, 100%, .06))',
    WebkitMask: 'linear-gradient(#fff, #fff) content-box content-box, linear-gradient(#fff, #fff)',
    padding: '15px',
    overflow: 'hidden',
    position: 'relative',
    fontSize: '12px',
    transition: 'transform 1.2s',

    '&:hover': {
      transform: 'translateY(-10px)',
    },

    '&::after': {
      background: 'radial-gradient(34.71% 34.71% at 56.45% 63.48%, #8a6cff 23.44%, rgba(138, 108, 255, 0) 72.92%)',
      filter: 'blur(32px)',
      willChange: 'transform',
      WebkitBackfaceVisibility: 'hidden',
      MozBackfaceVisibility: 'hidden',
      WebkitTransform: 'translateZ(0)',
      MozTransform: 'translateZ(0)',
      position: 'absolute',
      content: '""',
      zIndex: 0,
      bottom: '-100px',
      left: '-160px',
      width: '296px',
      height: '296px',
    },
    spancapFirstWordStyle: {
      fontSize: '3.75rem',
      fontWeight: 'bold',
      [theme.breakpoints.down('lg')]: {
        fontSize: '2.5rem',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: '2rem',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
  }
  
}));


const Corecap = () => {
  
  const classes = useStyles();
 
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));


  // const styles = {
    
  //   cardContainer: {
  //     background: "linear-gradient(to right, #4F1D5A, #4C1D5A, #3D205A, #142152, #2A2157)", // Gradient background
  //     backdropFilter: 'blur(10px)', // Corrected property name
  //     overflow:'hidden',
  //     padding:'0',
  //     height: '32.5em',
  //     width: '75%',
  //     display: 'flex',
  //     justifyContent: 'center', // Center horizontally
  //     alignItems: 'center', // Center vertically
  //     padding: '60px 0 60px 0',
  //     margin: '0 auto', // Center the container within its parent
  //     position: 'relative',
  //     zIndex: 9,
  //   },
  //   card: {
  //     backgroundColor: "rgba(217, 217, 217, 0.5)", // Semi-transparent background
  //     color: "#fff",
  //     padding: "20px",
  //     display: "flex",
  //     alignItems: "center",
  //     justifyContent:'center',
  //     marginBottom: "20px",
  //     height: "55%", // Ensure full height
  //     minHeight: "100px", // Minimum height for cards
  //     width: '70%',
  //     position: "relative",
  //     overflow: "hidden",
  //     marginLeft:'9%'
      
  //   },
  //   image: {
  //     width: "100px",
  //     height: "100px",
  //     // marginRight: "20px",
  //     borderRadius: "8px",
  //     objectFit: "cover",
  //   },
  //   title: {
  //     textAlign: "center",
  //     margin: "40px 0",
  //     color: "white",
  //     fontSize: "2em",
  //   },
  // };
  

  const styles = {
    cardContainer: {
      background: "linear-gradient(to right, #4F1D5A, #4C1D5A, #3D205A, #142152, #2A2157)", // Gradient background
      backdropFilter: 'blur(10px)', // Corrected property name
      overflow: 'hidden',
      padding: '0',
      height: '32.5em',
      width: '75%',
      display: 'flex',
      justifyContent: 'center', // Center horizontally
      alignItems: 'center', // Center vertically
      padding: '60px 0',
      margin: '0 auto', // Center the container within its parent
      position: 'relative',
      zIndex: 9,
      '@media (max-width: 1200px)': { // Large screen
        width: '85%',
        height: '30em',
      },
      '@media (max-width: 900px)': { // Medium screen
        width: '90%',
        height: '25em',
        padding: '40px 0',
      },
      '@media (max-width: 480px)': { // Small screen
        width: '100%',
        height: '20em',
        padding: '20px 0',
      },
    },
    card: {
      backgroundColor: "rgba(217, 217, 217, 0.5)", // Semi-transparent background
      color: "#fff",
      padding: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: 'center',
      marginBottom: "20px",
      height: "55%", // Ensure full height
      minHeight: "100px", // Minimum height for cards
      width: '70%',
      position: "relative",
      overflow: "hidden",
      marginLeft: '9%',
      '@media (max-width: 1200px)': {
        width: '80%',
        marginLeft: '6%',
      },
      '@media (max-width: 900px)': {
        width: '85%',
        marginLeft: '4%',
      },
      '@media (max-width: 480px)': {
        width: '100%',
        flexDirection: 'column', // Adjust layout for smaller screens
        marginLeft: '2%',
      },
    },
    image: {
      width: "100px",
      height: "100px",
      borderRadius: "8px",
      objectFit: "cover",
      '@media (max-width: 600px)': {
        width: "80px",
        height: "80px",
      },
    },
    title: {
      textAlign: "center",
      margin: "40px 0",
      color: "white",
      fontSize: "2em",
      '@media (max-width: 900px)': {
        fontSize: "1.5em",
        margin: "30px 0",
      },
      '@media (max-width: 600px)': {
        fontSize: "1.2em",
        margin: "20px 0",
      },
    },
  };
  
  return (
    <div className="content-below-capabbanner">
    <section className="corecardContainer">
        <div className="container">
          <Typography variant="h2" style={styles.title}>
            Core Competencies: Next-gen Features for Modern Intelligence
          </Typography>

          <Grid container spacing={4}>
            {[
              {
                src: "images/custom.png",
                alt: "Feature 1 Image",
                title: "Advanced Analytics",
                description: "Gain insights with our powerful analytics toolset, allowing for real-time data processing.",
              },
              {
                src: "images/agile.png",
                alt: "Feature 2 Image",
                title: "Real-Time Monitoring",
                description: "Monitor activities in real-time with our advanced surveillance system that supports multiple camera feeds.",
              },
              {
                src: "images/prediction.png",
                alt: "Feature 3 Image",
                title: "AI-Powered Insights",
                description: "Utilize AI to predict and analyze patterns, providing deep insights and predictive intelligence.",
              },
              {
                src: "images/sensor.png",
                alt: "Feature 4 Image",
                title: "Customizable Dashboards",
                description: "Design your own dashboards and reports tailored to your specific needs and operational goals.",
              },
            ].map((card, index) => (
              <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                <Card style={styles.card}>
                  <Box component="img" src={card.src} alt={card.alt} style={styles.image} />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography variant="body2">{card.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </section>

      <section className="capsection">
      <Typography variant="h2"  className="spancapFirstWordStyle">
            Differentiators
          </Typography>

        <div className="container">
          
          <Grid container spacing={4} justifyContent="center">
            {[
              {
                title: "Improvement On Edge",
                description: "Identify and learn new information in real-time at the edge, continuously improving to ensure effectiveness in dynamic defense scenarios.",
              },
              {
                title: "Multi-Domain Adaptability",
                description: "Seamlessly operates across land, sea, and air domains, providing a unified solution for diverse operational environments.",
              },
              {
                title: "Cost Effective System",
                description: "Reduces costs and downtime by continuously updating in real-time, eliminating the need for frequent and expensive overhauls.",
              },
              {
                title: "Legacy Device Compatibility",
                description: "Our solution upgrades legacy devices with an AI layer, maximizing the value of existing hardware.",
              },
            ].map((card, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card className={classes.keyFeatures}>
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {card.title}
                    </Typography>
                    <Typography variant="body2">{card.description}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </div>
      </section>

      <section className="capsection">
        <div className="container">
          <Typography variant="h3" className="unlocktitle">
            Unlocking Different <span style={styles.spanFirstWordStyle} >Application</span>
          </Typography>
          <Box className="imageCapContainer">
            {[
              {
                src: "images/capabilities-card1.png",
                alt: "Feature 1 Image",
                title: "LAND: Emerging Threat Observation System (ETOS)",
              },
              {
                src: "images/capabilities-card2.png",
                alt: "Feature 2 Image",
                title: "SEA: Marine Reconnaissance System (MIRAS)",
              },
              {
                src: "images/capabilities-card3.png",
                alt: "Feature 3 Image",
                title: "AIR: AROS (Aerial Reconnaissance & Observation System)",
              }
            ].map((card, index) => (
              <Box key={index} className="imageCapBox">
                <Box component="img" src={card.src} alt={card.alt} className="imagecapBoxImg" />
                <Typography variant="h6" style={{ color: "#fff", margin: "10px 0" }}>
                  {card.title}
                </Typography>
              </Box>
            ))}
          </Box>
        </div>
      </section>
    </div>
  );
};

export default Corecap;
