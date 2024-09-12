
// import React, { useState, useEffect, useCallback } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Dialog, DialogActions, Button, Grid } from "@material-ui/core";
// import HelpingForm from "./HelpingForm";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const location = useLocation();
//   const [headerClass, setHeaderClass] = useState("");

//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   const handleScroll = useCallback(() => {
//     const headerClass = window.scrollY > 30 ? "fixed" : "";
//     setHeaderClass(headerClass);
//   }, []);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", () => setWindowWidth(window.innerWidth));
//     };
//   }, [handleScroll]);

//   const handleClickOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);
//   const headerStyle = {
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center",
//     padding: "0 15px",
//     position: "relative",
//     zIndex: 9999,
//     width:'100%',
//   boxSizing: "border-box",
//   left:0,

//   background: "linear-gradient(to right, #000000, #0A050F, #1E053B,#160C23,#150529,#000000)", // Gradient background
//   boxSizing: "border-box",
//     fontFamily: '"Poppins", sans-serif',
//     fontSize: "14px",
//     fontWeight: 400,
//     // color: "#b0b0b0",
//   };
  
  
  
//   // Styles for the body
//   const bodyStyle = {
//     // backgroundColor: "#10101b",
//     // color: "#b0b0b0",
//     fontWeight: 400,
//     margin: 0,
//     overflowX: "hidden",
//     padding: 0,
//     position: "relative",
//     width: "100%",
//     fontFamily: '"Poppins", sans-serif',
//     fontSize: "14px",
//     borderTop:'1px solid white',
//   };
  
//   const announcementBarStyle = {
//     textAlign: "center",
//     padding: "5px",
//     width: "100%",
//     boxSizing: "border-box",
//     background:'#130E0E',
//     color:'white',
//     borderBottom:'1 px solid white',
//     ZIndex:1000,
//     fontWeight:400,
//   };

//   const navLinkStyle = {
//     color: "#fff",
//     fontSize: windowWidth > 768 ? "16px" : "14px",
//     padding: "8px 12px",
//     fontFamily: 'futura-pt, sans-serif',
//     fontWeight: 100,
//     textAlign: 'center',
//     position: 'relative',
//     display: 'block',
   
//   };

//   return (
//     <>
//       <Dialog open={open} onClose={handleClose}>
//         <HelpingForm />
//         <DialogActions>
//           <Button onClick={handleClose} style={{ color: "black" }}>
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//       {!location.pathname.startsWith("/news") && location.pathname !== "/news" && location.pathname !== "/use-cases" && (
//   <div style={announcementBarStyle}>
//     <Link
//       to="/home"
//       style={{
//         textDecoration: "none",
//         textAlign: "center",
       
//       }}
//     >
//       <h3
//         style={{
//           margin: 0,
//           fontSize: windowWidth > 768 ? "12px" : "12px",
//           lineHeight: "1.5",
//           background: "transparent"
//         }}
//       >
//         Skylark Labs Selected Under the SBIR Phase 2 Program to Enhance UAS Detection and Tracking Capabilities for U.S. Air Force
//       </h3>
//     </Link>
//   </div>
// )}
// <div style={bodyStyle}>


//       <header style={headerStyle}>
//         <Grid container alignItems="center" justifyContent="space-between">
//           <Grid item>
//             <Link to="/" style={{ display: "flex", alignItems: "center", marginLeft: "50px" }}>
//               <img src="/images/White-Skylark-Labs-logo.png" alt="Skylark Labs Logo" style={{ width: "200px" }} />
//             </Link>
//           </Grid>
//           <Grid item>
//             <nav style={navLinkStyle}>
//               <ul style={{ listStyleType: "none", display: "flex", margin: 0, padding: 0 }}>
//                 <li style={{ margin: "0 20px" }}>
//                   <Link to="/home" style={navLinkStyle}>HOME</Link>
//                 </li>
//                 <li style={{ margin: "0 20px" }}>
//                   <Link to="/capabilities" style={navLinkStyle}>CAPABILITIES</Link>
//                 </li>
//                 <li style={{ margin: "0 20px" }}>
//                   <Link to="/aboutplatform" style={navLinkStyle}>DEMO</Link>
//                 </li>
//                 <li style={{ margin: "0 20px" }}>
//                   <Link to="/performance" style={navLinkStyle}>PAST PERFORMANCE</Link>
//                 </li>
//                 <li style={{ margin: "0 20px" }}>
//                   <Link to="/contact" style={navLinkStyle}>CONTACT</Link>
//                 </li>
//               </ul>
//             </nav>
//           </Grid>
//           <Grid item>
//             <Link to="/" style={{ display: "flex", alignItems: "center",marginRight:'60px'}}>
//               <img src="/images/ufscr-logo.png" alt="USFCR Logo" style={{ width: "90px" }} />
//             </Link>
//           </Grid>
//         </Grid>
//       </header>
//       </div>

//     </>
//   );
// };

// export default Header;


import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useEffect } from "react";
const AboutPage = () => {
  // useEffect(() => {
  //   const link = document.createElement("link");
  //   link.href = process.env.PUBLIC_URL + "/assets/styles/About.css";
  //   link.rel = "stylesheet";
  //   document.head.appendChild(link);
  
  //   return () => {
  //     document.head.removeChild(link); // Clean up on component unmount
  //   };
  // }, []);
  return (
    <Box className="about-page-container">
      {/* Heading */}
      <Typography variant="h2" className="about-heading">
        About the Platform
      </Typography>
      <Typography variant="body1" className="about-description">
        Our platform offers a comprehensive suite of tools designed to enhance
        your productivity and streamline your workflow. With user-friendly
        interfaces and advanced functionalities, we aim to provide a seamless
        experience that meets your needs and exceeds your expectations.
      </Typography>

      {/* Container for the Cards */}
      <Box className="card-container">
        <Box
          sx={{ display: "flex", flexDirection: "column", gap: "40px", mt: 5 }}
        >
          {/* First Box */}
          <Box className="card-box">
            <Box sx={{ flex: 1.2 }}>
              <img
                src="images/card1.png"
                alt=""
                className="card-image"
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" className="card-title">
                LAND PRODUCT LINE <br /> ETOS (Emerging Threat <br />
                Observation and detection System)
              </Typography>
              <Typography variant="body2" className="card-content">
                Detects land-based threats by integrating data from CCTV
                cameras, radars, and audio sensors to provide real-time
                situational awareness. It's designed for perimeter security at
                borders, military bases, and government buildings. TRL: 6+
              </Typography>
              <Button
                variant="contained"
                className="book-demo-button"
                onClick={() => {
                  // Your click handler logic here
                }}
              >
                Book a Demo
              </Button>
            </Box>
          </Box>

          {/* Second Box */}
          <Box className="card-box">
            <Box sx={{ flex: 1, marginLeft: "40px" }}>
              <Typography variant="h6" className="card-title">
                Sea product Line <br /> MIRAS (Marine
                <br /> Reconnaissance System)
              </Typography>
              <Typography variant="body2" className="card-content">
                Uses cameras and radars to detect underwater and surface targets
                from CCTV cameras and radars, enhancing situational awareness
                for maritime operations. It features modules for maritime border
                monitoring, port and harbor security, illegal fishing detection,
                and search and rescue. TRL: 6+
              </Typography>
              <Button
                variant="contained"
                className="book-demo-button"
                onClick={() => {
                  // Your click handler logic here
                }}
              >
                Book a Demo
              </Button>
            </Box>
            <Box sx={{ flex: 1.2, marginTop: "20px", marginBottom: "20px" }}>
              <img
                src="images/card2.png"
                alt=""
                className="card-image"
              />
            </Box>
          </Box>

          {/* Third Box */}
          <Box className="card-box">
            <Box
              sx={{ flex: 1.2, marginLeft: "30px", marginTop: "20px", marginBottom: "20px" }}
            >
              <img
                src="images/card3.png"
                alt=""
                className="card-image"
              />
            </Box>
            <Box sx={{ flex: 1 }}>
              <Typography variant="h6" className="card-title">
                Air Product Line <br /> AROS (Aerial Reconnaissance & <br />
                Observation System)
              </Typography>
              <Typography variant="body2" className="card-content">
                Is a dual-capability system that monitors both airborne threats
                and empowers friendly airborne platforms to observe ground
                activities for situational awareness. It detects threats like
                rogue drones while also enabling aerial surveillance of ground
                spaces. Applications include counter-UAS, friend or foe drone
                identification, and monitoring drone flight patterns near bases
                and government buildings.
              </Typography>
              <Button
                variant="contained"
                className="book-demo-button"
                onClick={() => {
                  // Your click handler logic here
                }}
              >
                Book a Demo
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;



// Hedaer code

// import React, { useState, useEffect, useCallback } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Dialog, DialogActions, Button, Grid } from "@material-ui/core";
// import HelpingForm from "./HelpingForm";
// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const location = useLocation();
//   const [headerClass, setHeaderClass] = useState("");

//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

//   const handleScroll = useCallback(() => {
//     const headerClass = window.scrollY > 30 ? "fixed" : "";
//     setHeaderClass(headerClass);
//   }, []);

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//       window.removeEventListener("resize", () => setWindowWidth(window.innerWidth));
//     };
//   }, [handleScroll]);
//   // Inside the useEffect of your Header component
// // useEffect(() => {
// //   const link = document.createElement("link");
// //   link.href = process.env.PUBLIC_URL + "/assets/styles/Header.css";
// //   link.rel = "stylesheet";
// //   document.head.appendChild(link);

// //   return () => {
// //     document.head.removeChild(link); // Clean up on component unmount
// //   };
// // }, []);


//   const handleClickOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <>
//       <Dialog open={open} onClose={handleClose}>
//         <HelpingForm />
//         <DialogActions>
//           <Button onClick={handleClose} style={{ color: "black" }}>
//             Close
//           </Button>
//         </DialogActions>
//       </Dialog>
//       {!location.pathname.startsWith("/news") && location.pathname !== "/news" && location.pathname !== "/use-cases" && (
//         <div className="announcement-bar">
//           <Link to="/home">
//             <h3>
//               Skylark Labs Selected Under the SBIR Phase 2 Program to Enhance UAS Detection and Tracking Capabilities for U.S. Air Force
//             </h3>
//           </Link>
//         </div>
//       )}
//       <div className="body">
//         <header className="head">
//           <Grid container alignItems="center" justifyContent="space-between">
//             <Grid item>
//               <Link to="/" className="header-logo">
//                 <img src="/images/White-Skylark-Labs-logo.png" alt="Skylark Labs Logo" />
//               </Link>
//             </Grid>
//             <Grid item>
//               <nav>
//                 <ul className="nav-list">
//                   <li className="nav-item">
//                     <Link to="/home" className="nav-link">HOME</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link to="/capabilities" className="nav-link">CAPABILITIES</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link to="/aboutplatform" className="nav-link">DEMO</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link to="/performance" className="nav-link">PAST PERFORMANCE</Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link to="/contact" className="nav-link">CONTACT</Link>
//                   </li>
//                 </ul>
//               </nav>
//             </Grid>
//             <Grid item>
//               <Link to="/" className="usfcr-logo">
//                 <img src="/images/ufscr-logo.png" alt="USFCR Logo" />
//               </Link>
//             </Grid>
//           </Grid>
//         </header>
//       </div>
//     </>
//   );
// };

// export default Header;