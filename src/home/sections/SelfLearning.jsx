
import React, { useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import ReactPlayer from "react-player";
const Selflearingai = () => {
 
  return (
    <>
      <div className="content-below-banner">
        <div className="centered-text">
          <span className="span-first-word">Self-Learning AI</span>, Motion Analysis, Sensor Fusion, BVLOS<br />Threats Prediction, Explainable AI
        </div>
        <div className="centered-text-sec">
          "DUAL-USE SELF-LEARNING AI TO FORESEE EMERGING THREATS"
        </div>
        <div className="self-productoverviewblock">
          <div className="self-container">
            <div className="self-card-content">
              <Grid container spacing={6}>
                {/* <Grid item xs={6} sm={6} md={6} lg={6}>
                  <div className="selfh2style">
                    <h2>
                      <span className="span-first-word">About</span> SkyLark Labs
                    </h2>
                    </div>
                    <div className="selfpstyle">
                    <p className="selfpstyle">
                      Skylark Labs Inc. develops Dual-use Self-learning AI security products that proactively identify known threats and continuously learn new, unanticipated threats. Our proprietary technology has been used by several defenses (on drones, helicopters, satellites) and commercial organizations to enhance safety, security, and productivity applications. Most recently, non-profits in India used our technology to rescue 13 trafficked children from brothels in India.
                    </p>
                  </div>
                </Grid> */}
                 <Grid item xs={12} sm={12} md={6} lg={6}>
                  <div className="BannerhomeRightBlock">
                    <h2 className="Bannerh2Style">
                    <span className="span-first-word">About</span> SkyLark Labs
                    </h2>
                    <p className="BannerpStyle">
                    Skylark Labs Inc. develops Dual-use Self-learning AI security products that proactively identify known threats and continuously learn new, unanticipated threats. Our proprietary technology has been used by several defenses (on drones, helicopters, satellites) and commercial organizations to enhance safety, security, and productivity applications. Most recently, non-profits in India used our technology to rescue 13 trafficked children from brothels in India.
                    </p>
                  </div>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <div className="self-videoleftblock">
                    <ReactPlayer
                      controls={true}
                      playsinline
                      volume={0}
                      width="100%"
                      height="100%"
                      loop={true}
                      muted={false}
                      playing={true}
                      stopOnUnmount={true}
                      url="https://www.youtube.com/embed/K0nzQoT6Ymw?si=IA10l8er0KgO74P4"
                    />
                  </div>
                </Grid>
              </Grid>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Selflearingai;
