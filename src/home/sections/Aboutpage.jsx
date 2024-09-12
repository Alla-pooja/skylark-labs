
// import React from "react";
// import { Box, Typography, Button } from "@mui/material";
// import HelpingForm from "../../HelpingForm";

// const AboutPage = () => {
//   const [open, setOpen] = React.useState(false);

//   const handleClickOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };
//   return (
//     <Box className="aboutcontainer">
//       <Typography className="aboutheading" variant="h2">
//         About the Platform
//       </Typography>
//       <Typography className="aboutdescription">
//         Our platform offers a comprehensive suite of tools designed to enhance your productivity and streamline your workflow. With user-friendly interfaces and advanced functionalities, we aim to provide a seamless experience that meets your needs and exceeds your expectations.
//       </Typography>

//       <Box className="about-card-container">
//         <Box className="about-card-box">
//           <Box className="about-card-image">
//             <img src="images/card1.png" alt="" />
//           </Box>
//           <Box className="about-card-content">
//             <Typography variant="h6">LAND PRODUCT LINE <br /> ETOS (Emerging Threat <br /> Observation and detection System)</Typography>
//             <Typography variant="body2">
//               Detects land-based threats by integrating data from CCTV cameras, radars, and audio sensors to provide real-time situational awareness. It's designed for perimeter security at borders, military bases, and government buildings. TRL: 6+
//             </Typography>
//             <div className="demo-button">
//             <a href='/form'>
//             <Button  className="demo-text">
//               Book a Demo
//             </Button>
//             </a>
//             </div>
//           </Box>
//         </Box>

//         <Box className="about-card-box2">
//           <Box className="about-card-content">
//             <Typography variant="h6">Sea product Line <br /> MIRAS (Marine<br /> Reconnaissance System)</Typography>
//             <Typography variant="body2">
//               Uses cameras and radars to detect underwater and surface targets from CCTV cameras and radars, enhancing situational awareness for maritime operations. It features modules for maritime border monitoring, port and harbor security, illegal fishing detection, and search and rescue. TRL: 6+
//             </Typography>
//             <div className="demo-button">
//               <a href='/form'>
//             <Button  className="demo-text">
//               Book a Demo
//             </Button>
//             </a>
//             </div>
//           </Box>
//           <Box className="about-card-image">
//             <img src="images/card2.png" alt="" />
//           </Box>
//         </Box>

//         <Box className="about-card-box">
//           <Box className="about-card-image">
//             <img src="images/card3.png" alt="" />
//           </Box>
//           <Box className="about-card-content">
//             <Typography variant="h6">Air Product Line <br /> AROS (Aerial Reconnaisance & <br /> Observation System)</Typography>
//             <Typography variant="body2">
//               Is a dual-capability system that monitors both airborne threats and empowers friendly airborne platforms to observe ground activities for situational awareness. It detects threats like rogue drones while also enabling aerial surveillance of ground spaces. Applications include counter-UAS, friend or foe drone identification, and monitoring drone flight patterns near bases and government buildings.
//             </Typography>
//             <div className="demo-button">
//             <a href='/form'>
//             <Button  className="demo-text">
//               Book a Demo
//             </Button>
//             </a>
//             </div>
//           </Box>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default AboutPage;
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HelpingForm from "../../HelpingForm";

const AboutPage = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box className="aboutcontainer">
      <Typography className="aboutheading" variant="h2">
        About the Platform
      </Typography>
      <Typography className="aboutdescription">
        Our platform offers a comprehensive suite of tools designed to enhance your productivity and streamline your workflow. With user-friendly interfaces and advanced functionalities, we aim to provide a seamless experience that meets your needs and exceeds your expectations.
      </Typography>

      <Box className="about-card-container">
        <Box className="about-card-box">
          <Box className="about-card-image">
            <img src="images/card1.png" alt="" />
          </Box>
          <Box className="about-card-content">
            <Typography variant="h6">LAND PRODUCT LINE <br /> ETOS (Emerging Threat <br /> Observation and Detection System)</Typography>
            <Typography variant="body2">
              Detects land-based threats by integrating data from CCTV cameras, radars, and audio sensors to provide real-time situational awareness. It's designed for perimeter security at borders, military bases, and government buildings. TRL: 6+
            </Typography>
            <div className="demo-button">
              <a href='/form'>
                <Button className="demo-text">
                  Book a Demo
                </Button>
              </a>
            </div>
          </Box>
        </Box>

        <Box className="about-card-box about-card-reverse">
          <Box className="about-card-content">
            <Typography variant="h6">Sea Product Line <br /> MIRAS (Marine<br /> Reconnaissance System)</Typography>
            <Typography variant="body2">
              Uses cameras and radars to detect underwater and surface targets from CCTV cameras and radars, enhancing situational awareness for maritime operations. It features modules for maritime border monitoring, port and harbor security, illegal fishing detection, and search and rescue. TRL: 6+
            </Typography>
            <div className="demo-button">
              <a href='/form'>
                <Button className="demo-text">
                  Book a Demo
                </Button>
              </a>
            </div>
          </Box>
          <Box className="about-card-image">
            <img src="images/card2.png" alt="" />
          </Box>
        </Box>

        <Box className="about-card-box">
          <Box className="about-card-image">
            <img src="images/card3.png" alt="" />
          </Box>
          <Box className="about-card-content">
            <Typography variant="h6">Air Product Line <br /> AROS (Aerial Reconnaisance & <br /> Observation System)</Typography>
            <Typography variant="body2">
              Is a dual-capability system that monitors both airborne threats and empowers friendly airborne platforms to observe ground activities for situational awareness. It detects threats like rogue drones while also enabling aerial surveillance of ground spaces. Applications include counter-UAS, friend or foe drone identification, and monitoring drone flight patterns near bases and government buildings.
            </Typography>
            <div className="demo-button">
              <a href='/form'>
                <Button className="demo-text">
                  Book a Demo
                </Button>
              </a>
            </div>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutPage;
