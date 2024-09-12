
// import React, { useEffect, useState } from "react";
// import ReactPlayer from "react-player";

// const Demonstrate = () => {
//   const [height, setHeight] = useState(window.innerHeight);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (window.innerWidth < 767) {
//       setHeight("auto");
//     } else {
//       setHeight(window.innerHeight);
//     }
//   }, [height]);

//   const animate = (index, count) => {
//     const texts = [""];
    
//     function sleep(delay) {
//       return new Promise((resolve) => setTimeout(resolve, delay));
//     }

//     const typeWrite = async () => {
//       if (count === texts.length) {
//         count = 0;
//       }
//       let currentWord = texts[count];
//       let currentLetter = currentWord.slice(0, ++index);
//       const typing = document.querySelector(".typing");
//       const mobtyping = document.querySelector(".mobile-typing");
      
//       if (typing) typing.textContent = currentLetter;
//       if (mobtyping) mobtyping.textContent = currentLetter;

//       if (index === currentWord.length) {
//         await sleep(1500);
//         while (index > 0) {
//           currentLetter = currentWord.slice(0, --index);
//           if (typing) typing.textContent = currentLetter;
//           if (mobtyping) mobtyping.textContent = currentLetter;
//           await sleep(50);
//         }
//         count++;
//         index = 0;
//         await sleep(500);
//       }
//       setTimeout(typeWrite, Math.random() * 200 + 50);
//     };
//     typeWrite();
//   };

//   useEffect(() => {
//     if (loading) {
//       setTimeout(() => {
//         animate(0, 0);
//       }, 8000);
//       setLoading(false);
//     }
//   }, [loading]);

//   // Inline styles
  
//   return (
//     <div className="bannerContainerDemo">
//     <section className="mainbanner banner_part bgnone">
//       <div className="bannerimgblock">
//         <ReactPlayer
//           style={{
//             zIndex: "-1",
//             pointerEvents: "none",
//           }}
//           controls={false}
//           volume={0}
//           width="100%"
//           height="100%"
//           loop={true}
//           muted={true}
//           playing={true}
//           url="https://d1nbq27kwttg28.cloudfront.net/blog/Self-learling.mp4"
//         />
//         <div className="bannerContentDemo">
//           <div className="container">
//             <div className="contentBoxdemo">
//               <h1 className="titleDemo">
//                 Demonstration of capabilities
//               </h1>
//               <br />
//               <h3 className="secondTitleDemo">Enhancing Military Operations with Advanced Sensor Data Integration</h3>
//               <div className="intro">
//                 <div className="typingdemo"></div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
  
//     <div className="MobileBanner">
//       <div className="container">
//         <div className="contentBoxdemo">
//           <h1>
//             <a href="self-learning-ai">
//               Self-Learning AI <br /> To Foresee Emerging Threats
//             </a>
//           </h1>
//           <div className="intro">
//             <div className="typingdemo"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   </div>
  
//   );
// };

// export default Demonstrate;
import React from 'react';
import ReactPlayer from 'react-player';

const Demonstrate = () => {
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
                Demonstration of capabilities
                </h1>  
                <br />
                <h3 className="CapsecondTitle">
                Enhancing Military Operations with Advanced Sensor Data Integration
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

export default Demonstrate;
