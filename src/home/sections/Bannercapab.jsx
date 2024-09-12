import React from 'react';
import ReactPlayer from 'react-player';

const Bannercapab = () => {
  return (
    <div className="bannerCapContainerStyle">
      <section className="mainbanner banner_part bgnone">
        <div className="bannerimgblock">
          <ReactPlayer
            style={{
              zIndex: "-1",
              pointerEvents: "none",
            }}
            controls={false}
            volume={0}
            width="100%"
            height="100%"
            loop={true}
            muted={true}
            playing={true}
            url="https://d1nbq27kwttg28.cloudfront.net/blog/Self-learling.mp4"
          />
          <div className="bannerCapContentStyle">
            <div className="container">
              <div className="contentcapBoxStyle">
                <h1 className="titleCapStyle">
                  CAPABILITIES STATEMENT
                </h1>  
                <br />
                <h3 className="CapsecondTitle">
                  Delivering Advanced Solutions for Enhanced Operational Efficiency and <br /> Strategic Advantage
                </h3>
                <div className="intro">
                  <div className="CaptypingStyle"></div>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Bannercapab;
