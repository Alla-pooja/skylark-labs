import React, { useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";

const BannerOverview = () => {


  const spanFirstWordStyle= {
    background: 'linear-gradient(50deg, #714dff, #9c83ff 31.28%, #2EA3FF 77.97%, #2EA3FF 95.64%)',
    WebkitBackgroundClip: "text", // Clip the gradient to the text
    WebkitTextFillColor: "transparent", // Make the rest of the text transparent
  }

  return (
    <>
      <div className="complete-bannercard">
        <section className="BannercardContainer" >
          <div className="over-container">
            <div className="over-card-content">
              <Grid container spacing={3}>
                {/* Image on the Left */}
                <Grid item xs={12} sm={12} md={4} lg={6}>
                  <div className="BannerimageLeftBlock">
                    <img
                      src="images/detecting.png" // Replace with your image path
                      alt="Feature Image"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                        marginTop:'30px', // Maintain aspect ratio
                        marginBottom:'30px',
                      }}
                    />
                  </div>
                </Grid>

                {/* Text on the Right */}
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <div className="BannerhomeRightBlock">
                    <h2 className="Bannerh2Style">
                      <span style={spanFirstWordStyle}>OverView of </span> SkyLark Labs
                    </h2>
                    <p className="BannerpStyle">
                    SkyLark Labs offers a pioneering self-learning AI system that identifies and learns new threats in real-time at the edge, eliminating the need for costly updates. This AI continuously adapts to new information and environments, ensuring effectiveness in dynamic defense scenarios. It provides timely threat assessments, reduces costs, and enhances operational security, ensuring forces are better prepared for evolving threats and maintaining battlefield superiority.
                    </p>
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default BannerOverview;
