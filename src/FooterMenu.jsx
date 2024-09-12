// import React from "react";
// import Grid from "@material-ui/core/Grid";
// import { makeStyles } from "@material-ui/core/styles";

// const useStyles = makeStyles({
//   footer: {
//     backgroundColor: "#000000", // Black background color
//     color: "#fff", // White text color for contrast
//     padding: "20px",
//     textAlign: "left",
//     boxShadow: "0 3px px rgba(0, 0, 0,.1)", // Fully black box shadow
//     display: 'flex',
//     paddingLeft:'10%',
//     justifyContent: 'space-between', // Align items to the left and right
//     alignItems:'center',
//     boxSizing: "border-box",
//   },
//   footerText: {
//     fontSize: "19px",
//     padding: "10px",
//     borderRadius: "4px",
//     flex: 1, // Allow text to take available space
//   },
//   logoContainer: {
//     display: "flex",
//     justifyContent: "flex-end", // Align logos to the right
//     alignItems: "center",
//     marginRight:'10%'
//   },
//   logo: {
//     width: "130px",
//     height: "auto",
//     margin: "0 10px",
//     boxShadow: "0 4px 8px rgba(0, 0, 0, 1)", // Fully black box shadow for logos
//   },
// });

// const Footermenu = () => {
//   const classes = useStyles();

//   return (
//     <footer className={classes.footer}>
//       <div className={classes.footerText}>
//         Skylark Labs Inc is enrolled in the Simplified Acquisition Program of US Federal <br />
//         Contractor Registration (USFCR).
//       </div>
//       <div className={classes.logoContainer}>
//         <a href="https://www.linkedin.com/company/skylarklabs/" target="_blank" rel="noopener noreferrer">
//           <img src="images/ufscr-logo.png" alt="LinkedIn" className={classes.logo} />
//         </a>
//         <a href="https://www.instagram.com/skylarklabs/" target="_blank" rel="noopener noreferrer">
//           <img src="images/ufscr-footer-logo.png" alt="Instagram" className={classes.logo} />
//         </a>
//       </div>
//     </footer>
//   );
// };

// export default Footermenu;
import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#000000", // Black background color
    color: "#fff", // White text color for contrast
    padding: "20px",
    textAlign: "center",
    boxShadow: "0 3px px rgba(0, 0, 0,.1)", // Fully black box shadow
    display: 'flex',
    flexDirection: 'row', // Default to horizontal layout
    justifyContent: 'space-between', // Align items to the left and right
    alignItems: 'center',
    boxSizing: "border-box",
    [theme.breakpoints.down('md')]: { // Adjust for medium screens and smaller
      flexDirection: 'column', // Stack items vertically
      textAlign: 'center', // Center text alignment
    },
  },
  footerText: {
    fontSize: "19px",
    padding: "10px",
    borderRadius: "4px",
    flex: 1, // Allow text to take available space
    [theme.breakpoints.down('md')]: { // Adjust text size for medium screens and smaller
      fontSize: "16px",
      padding: "5px",
    },
  },
  logoContainer: {
    display: "flex",
    justifyContent: "flex-end", // Align logos to the right
    alignItems: "center",
    marginRight: '10%',
    [theme.breakpoints.down('md')]: { // Adjust for medium screens and smaller
      justifyContent: 'center', // Center logos on smaller screens
      marginRight: 0,
      marginTop: '10px', // Add space above logos on smaller screens
    },
  },
  logo: {
    width: "130px",
    height: "auto",
    margin: "0 10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 1)", // Fully black box shadow for logos
    [theme.breakpoints.down('md')]: { // Adjust logo size for medium screens and smaller
      width: "100px",
      margin: "0 5px",
    },
  },
}));

const Footermenu = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <div className={classes.footerText}>
        Skylark Labs Inc is enrolled in the Simplified Acquisition Program of US Federal <br />
        Contractor Registration (USFCR).
      </div>
      <div className={classes.logoContainer}>
        <a href="https://www.linkedin.com/company/skylarklabs/" target="_blank" rel="noopener noreferrer">
          <img src="images/ufscr-logo.png" alt="LinkedIn" className={classes.logo} />
        </a>
        <a href="https://www.instagram.com/skylarklabs/" target="_blank" rel="noopener noreferrer">
          <img src="images/ufscr-footer-logo.png" alt="Instagram" className={classes.logo} />
        </a>
      </div>
    </footer>
  );
};

export default Footermenu;
