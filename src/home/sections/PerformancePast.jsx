// import React from 'react';
// import ReactPlayer from 'react-player';

// const PerformancePast = () => {
//   return (
//     <div className="bannerCapContainerStyle">
//       <section className="mainbanner banner_part bgnone">
//         <div className="bannerimgblock">
//           <ReactPlayer
//             style={{
//               zIndex: "-1",
//               pointerEvents: "none",
//             }}
//             controls={false}
//             volume={0}
//             width="100%"
//             height="100%"
//             loop={true}
//             muted={true}
//             playing={true}
//             url="https://d1nbq27kwttg28.cloudfront.net/blog/Self-learling.mp4"
//           />
//           <div className="bannerCapContentStyle">
//             <div className="container">
//               <div className="contentcapBoxStyle">
//               <h1 className="titlehome">
                  
//                                       AI that adaptys with changing <br /> landscape to identify new unknown <br/> threats
                                    
//                                 </h1>  
//                                  <br />
               
//                 <div className="intro">
//                   <div className="CaptypingStyle"></div>
//                 </div> 
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default PerformancePast;
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
                AI that adaptys with changing <br />
                landscape to identify new unknown <br/> threats
                </h1>  
                
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
