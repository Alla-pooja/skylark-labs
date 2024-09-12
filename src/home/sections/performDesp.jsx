
import React from "react";
import { Box, Card, CardContent, Typography, Button } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'; // Import Slider from react-slick

const PerformDesp = () => {
    const images = [
        "images/Airforce.png",
        "images/Indian-navy.png",
        "images/Indian-Army.png",
        "images/mantech.png",
        "images/mercedestext.jpg",
    ];
    const settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
                breakpoint: 1024, // For devices with width less than or equal to 1024px
                settings: {
                    slidesToShow: 3, // Show 3 slides on large tablets or small desktops
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, // For devices with width less than or equal to 768px
                settings: {
                    slidesToShow: 2, // Show 2 slides on tablets
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 480, // For devices with width less than or equal to 480px
                settings: {
                    slidesToShow: 2, // Show 1 slide on mobile devices
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };
    
    return (
        <Box className='perform-desp-container'>
            {/* Description */}
            <Typography variant="body1"className="perform-desp-description" >
                Our mission is to lead the way in AI-based unknown threat detection and prevention. As the threat landscape changes, our technology will excel and be at the forefront of identifying these unknown threats, helping to create a safer world for everyone      </Typography>

            {/* Container for the Cards */}
            <Box className='perform-desp-card-container' >
   <Box sx={{ display: "flex", flexDirection: "column", gap: "40px", mt: 4 }}>
                    <Box className='perform-desp-card-box'>
                        <Box sx={{ flex: 1.2}}>
                            <img src="images\performance-checking.png" alt="" style={{ width: "450px", height: "auto",marginLeft:'20px'}} />
                        </Box>
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", fontSize: "19px" }}>
                                <h3>
                                    <span className="spanFirstWordStyle">Counter UAS </span> (Us Air Force- SBIR Phase 2)
                                </h3>
                            </Typography>
                          
                            <p className="BannerpStyle">
                            Developed
                                technology to detect drones and classify them as friend or foe.
                                This project is focused on identifying and mitigating threats
                                from rogue drones. TRL: 3-4
                    </p>

                        </Box>

                    </Box>
                    <Box sx={{ display: "flex", gap: "20px", alignItems: "center", width: "100%",border:'1px solid #3C3C77',borderRadius:'20px'  , background: "url('images/perform-back.png')",}}>
                        <Box sx={{ flex: 1,marginLeft:'20px' }}>
                            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", fontSize: "19px", textDecoration: "underline" }}>
                                <h3>
                                    <span className="spanFirstWordStyle">Underwater Target Recognition</span> (US Navy -<br /> ONR Global)
                                </h3>
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#fff", textAlign: "justify", maxWidth: "350px" }}>
                                Developed AI for identifying underwater targets using anAUV. This technology improves submarine detection andmaritime security. TRL:3+</Typography>


                        </Box>

                        <div style={{ position: 'relative', width: '380px', height: '400px'}}>

                            {/* Image 1 */}
                            <Box
                                component="img"
                                src="images/performance2.png"
                                alt="Image 1"
                                sx={{
                                    position: 'absolute',
                                    top: '150px',
                                    left: '-120px',
                                    right: "100px",
                                    width: '290px',
                                    height: '220px',
                                }}
                            />

                            {/* Image 2 */}
                            <Box
                                component="img"
                                src="images/performance1.png"
                                alt="Image 2"
                                sx={{
                                    top: '70px',
                                    left: '260px', right: "300px",
                                    width: '350px',
                                    height: '230px',

                                }}
                            />

                            {/* Optional text content */}

                        </div>


                    </Box>
                    {/* third Box */}
                    <Box sx={{ display: "flex", gap: "20px", alignItems: "center", background: "url('images/perform-back.png')", width: "100%", marginTop: "40px",border:'1px solid #3C3C77',borderRadius:'20px' }}>

                        <div style={{ position: 'relative', width: '600px', height: '400px' }}>
                            {/* Image 1 */}
                            <Box
                                component="img"
                                src="images/performance-car.png"
                                alt="Image 1"
                                sx={{
                                    position: 'absolute',
                                    top: '20px',
                                    left: '30px',
                                    width: '300px',
                                    height: '230px',
                                }}
                            />

                            {/* Image 2 */}
                            <Box
                                component="img"
                                src="images/performance-tools.png"
                                alt="Image 2"
                                sx={{
                                    position: 'absolute',
                                    top: '200px',
                                    left: '250px',
                                    width: '170px',
                                    height: '170px',
                                }}
                            />

                            {/* Optional text content */}

                        </div>
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" sx={{ fontWeight: "bold", color: "#fff", fontSize: "19px", textDecoration: "underline",marginRight:'20px' }}>
                                <h3>
                                    <span className="spanFirstWordStyle">Foreign Object Debris</span> (FOD) Detection<br />(Indian Navy)
                                </h3>
                            </Typography>
                            <Typography variant="body2" sx={{ color: "#fff", textAlign: "justify", maxWidth: "350px" }}>
                                Created systems to identify debris on naval runways or shipdecks. This enhances safety by preventing potential damage toaircraft. TRL: 6+
                            </Typography>


                        </Box>

                    </Box>
                    <Box sx={{ position: 'relative', width: '100px', height: '150px', margin: '30px auto', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        {/* Your image intersection code here */}

                        {/* Centered Button */}
                        <Button
                            variant="outlined"
                            sx={{
                                marginTop: '2px', // Add margin to space the button from the images
                                borderColor: 'white',
                                fontWeight: 'bold',
                                padding: '10px 20px',
                                fontSize: '30px',
                                color:'white',
                                borderRadius: '50px',
                                fontWeight: 'bold',
                                

                            }}
                        >
                            <span className="spanFirstWordStyle">
                                ONGOING
                            </span> &nbsp;PROJECTS</Button>
                    </Box>

                </Box>


                <Box sx={{ width: '90%', marginTop: '30px', height: '30%' }}>
                    <Slider {...settings}>
                        {images.map((image, index) => (
                            <Box key={index} sx={{ padding: '30px' }}>
                                <img
                                    src={image}
                                    alt={`Carousel Image ${index + 1}`}
                                    style={{ width: '100px', height: '100px',padding:'30px' }} // Set fixed width and height
                                />
                            </Box>
                        ))}
                    </Slider>
                </Box>
            </Box>

        </Box>
    );
};

export default PerformDesp;
