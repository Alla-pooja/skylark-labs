
// // import React, { useState, useEffect, useCallback } from "react";
// // import { Link, useLocation } from "react-router-dom";
// // import { Dialog, DialogActions, Button, Grid } from "@material-ui/core";
// // import HelpingForm from "./HelpingForm";
// // import MenuIcon from "@material-ui/icons/Menu";
// // import CloseIcon from "@material-ui/icons/Close";

// // const Header = () => {
// //   const [open, setOpen] = useState(false);
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [submenuOpen, setSubmenuOpen] = useState({ platforms: false, resources: false });
// //   const location = useLocation();
// //   const [headerClass, setHeaderClass] = useState("");
// //   const [windowWidth, setWindowWidth] = useState(window.innerWidth);

// //   const handleScroll = useCallback(() => {
// //     const headerClass = window.scrollY > 30 ? "fixed" : "";
// //     setHeaderClass(headerClass);
// //   }, []);

// //   useEffect(() => {
// //     window.addEventListener("scroll", handleScroll);
// //     window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
// //     return () => {
// //       window.removeEventListener("scroll", handleScroll);
// //       window.removeEventListener("resize", () => setWindowWidth(window.innerWidth));
// //     };
// //   }, [handleScroll]);

// //   const handleClickOpen = () => setOpen(true);
// //   const handleClose = () => setOpen(false);

// //   const toggleMenu = () => setMenuOpen((prev) => !prev);
// //   const toggleSubmenu = (menu) => setSubmenuOpen((prev) => ({ ...prev, [menu]: !prev[menu] }));

// //   return (
// //     <>
// //       <Dialog open={open} onClose={handleClose}>
// //         <HelpingForm />
// //         <DialogActions>
// //           <Button onClick={handleClose} style={{ color: "black" }}>
// //             Close
// //           </Button>
// //         </DialogActions>
// //       </Dialog>
// //       {!location.pathname.startsWith("/news") && location.pathname !== "/news" && location.pathname !== "/use-cases" && (
// //         <div className="announcement-bar">
// //           <Link to="/home">
// //             <h3>
// //               Skylark Labs Selected Under the SBIR Phase 2 Program to Enhance UAS Detection and Tracking Capabilities for U.S. Air Force
// //             </h3>
// //           </Link>
// //         </div>
// //       )}
// //       <header className={`head ${headerClass}`}>
// //         <Grid container alignItems="center" justifyContent="space-between">
// //           <Grid item>
// //             <Link to="/" className="header-logo">
// //               <img src="/images/White-Skylark-Labs-logo.png" alt="Skylark Labs Logo" />
// //             </Link>
// //           </Grid>
// //           <Grid item className="desktop-nav">
// //             <nav>
// //               <ul className="nav-list">
// //                 <li className="nav-item">
// //                   <Link to="/home" className="nav-link">HOME</Link>
// //                 </li>
// //                 <li className="nav-item">
// //                   <Link to="/capabilities" className="nav-link">CAPABILITIES</Link>
// //                 </li>
              
// //                 <li className="nav-item">
// //                   <Link to="/aboutplatform" className="nav-link">DEMO</Link>
// //                 </li>
// //                 <li className="nav-item">
// //                   <Link to="/performance" className="nav-link">PAST PERFORMANCE</Link>
// //                 </li>
             
// //                 <li className="nav-item">
// //                   <Link to="/contact" className="nav-link">CONTACT</Link>
// //                 </li>
// //               </ul>
// //             </nav>
// //           </Grid>
// //           <Grid item>
// //             <Link to="/" className="usfcr-logo">
// //               <img src="/images/ufscr-logo.png" alt="USFCR Logo" />
// //             </Link>
// //           </Grid>
// //           <Grid item>
// //             <div className="menu-icon" onClick={toggleMenu}>
// //               {menuOpen ? <CloseIcon /> : <MenuIcon />}
// //             </div>
// //           </Grid>
// //         </Grid>
// //         {menuOpen && (
// //           <div className="menuMobile mobilemenu-open">
// //             <div className="mobilemenuOuter">
// //               <div className="mobilesolution">
// //                 <h4 className="MobileNavMain latnav">
// //                   <a href="/">Home</a>
                  
// //                 </h4>
                
// //                 <h4 className="MobileNavMain productcate">
// //                 <a href="/capabilities">Capabilities</a>

// //                 </h4>
              
// //                 <h4 className="MobileNavMain productcate">
// //                 <a href="/aboutplatform">Demo</a>

// //                 </h4>
// //                 <h4 className="MobileNavMain productcate">
// //                 <a href="/performance">Past Performance</a>

// //                 </h4>
// //                 <h4 className="MobileNavMain"><a href="/contact">Contact</a></h4>
             
// //               </div>
// //               <h4 className="MobileNavMain productcate">

// //               <div id="nav-icon3" className="open" style={{ zIndex: 100 }}>
// //                     <div className="closeicons">
// //                     <a href="/home">Close</a>

// //                       {/* <img src="images/close_menu.svg" alt="Close Menu" /> */}
// //                     </div>
// //                   </div>
// //                   </h4>
// //             </div>
// //           </div>
// //         )}
// //       </header>
// //     </>
// //   );
// // };

// // export default Header;

// import React, { useState, useEffect, useCallback } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Dialog, DialogActions, Button, Grid } from "@material-ui/core";
// import HelpingForm from "./HelpingForm";
// import MenuIcon from "@material-ui/icons/Menu";
// import CloseIcon from "@material-ui/icons/Close";

// const Header = () => {
//   const [open, setOpen] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
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

//   const toggleMenu = () => setMenuOpen((prev) => !prev);

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
//       <header className={`head ${headerClass}`}>
//         <Grid container alignItems="center" justifyContent="space-between">
//           <Grid item>
//             <Link to="/" className="header-logo">
//               <img src="/images/White-Skylark-Labs-logo.png" alt="Skylark Labs Logo" />
//             </Link>
//           </Grid>
//           <Grid item className="desktop-nav">
//             <nav>
//               <ul className="nav-list">
//                 <li className="nav-item">
//                   <Link to="/home" className="nav-link">HOME</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/capabilities" className="nav-link">CAPABILITIES</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/aboutplatform" className="nav-link">DEMO</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/performance" className="nav-link">PAST PERFORMANCE</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link to="/contact" className="nav-link">CONTACT</Link>
//                 </li>
//               </ul>
//             </nav>
//           </Grid>
//           <Grid item>
//             <Link to="/" className="usfcr-logo">
//               <img src="/images/ufscr-logo.png" alt="USFCR Logo" />
//             </Link>
//           </Grid>
//           <Grid item>
//             <div className="menu-icon" onClick={toggleMenu}>
//               {menuOpen ? <CloseIcon /> : <MenuIcon />}
//             </div>
//           </Grid>
//         </Grid>
//         {menuOpen && (
//           <div className="menuMobile mobilemenu-open">
//             <div className="mobilemenuOuter">
//               <div className="mobilesolution">
//                 <h4 className="MobileNavMain">
//                   <a href="/">Home</a>
//                 </h4>
//                 <h4 className="MobileNavMain">
//                   <a href="/capabilities">Capabilities</a>
//                 </h4>
//                 <h4 className="MobileNavMain">
//                   <a href="/aboutplatform">Demo</a>
//                 </h4>
//                 <h4 className="MobileNavMain">
//                   <a href="/performance">Past Performance</a>
//                 </h4>
//                 <h4 className="MobileNavMain">
//                   <a href="/contact">Contact</a>
//                 </h4>
//               </div>
//               <div className="close-icon" onClick={toggleMenu}>
//                 <CloseIcon />
//               </div>
//             </div>
//           </div>
//         )}
//       </header>
//     </>
//   );
// };

// export default Header;

// Header.jsx
import React, { useState, useCallback, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Dialog, DialogActions, Button, Grid } from "@material-ui/core";
import HelpingForm from "./HelpingForm";
import MenuIcon from "@material-ui/icons/Menu";
import Sidebar from "./Sidebar";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState("");
  const [mobileMenu, setMobileMenu] = useState(false);

  const location = useLocation();
  const [headerClass, setHeaderClass] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleScroll = useCallback(() => {
    const headerClass = window.scrollY > 30 ? "fixed" : "";
    setHeaderClass(headerClass);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", () => setWindowWidth(window.innerWidth));
    };
  }, [handleScroll]);

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleMenuToggle = () => {
    setMobileMenu(prevState => !prevState);
    if (!mobileMenu) {
      document.body.classList.add("open-it");
    } else {
      document.body.classList.remove("open-it");
    }
  };
  const toggleSidebar = () => {
    setMenuOpen((prev) => {
      console.log('Previous:', prev, 'Next:', !prev); // Debugging line
      return !prev;
    });
  };
  
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <HelpingForm />
        <DialogActions>
          <Button onClick={handleClose} style={{ color: "black" }}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
      {!location.pathname.startsWith("/news") && location.pathname !== "/news" && location.pathname !== "/use-cases" && (
        <div className="announcement-bar">
          <Link to="/home">
            <h3>
              Skylark Labs Selected Under the SBIR Phase 2 Program to Enhance UAS Detection and Tracking Capabilities for U.S. Air Force
            </h3>
          </Link>
        </div>
      )}
      <header className={`head ${headerClass}`}>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item>
            <Link to="/" className="header-logo">
              <img src="/images/White-Skylark-Labs-logo.png" alt="Skylark Labs Logo" />
            </Link>
          </Grid>
          <Grid item className="desktop-nav">
            <nav>
              <ul className="nav-list">
                <li className="nav-item">
                  <Link to="/home" className="nav-link">HOME</Link>
                </li>
                <li className="nav-item">
                  <Link to="/capabilities" className="nav-link">CAPABILITIES</Link>
                </li>
                <li className="nav-item">
                  <Link to="/aboutplatform" className="nav-link">DEMO</Link>
                </li>
                <li className="nav-item">
                  <Link to="/performance" className="nav-link">PAST PERFORMANCE</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">CONTACT</Link>
                </li>
              </ul>
            </nav>
          </Grid>
          <Grid item>
            <Link to="/" className="usfcr-logo">
              <img src="/images/ufscr-logo.png" alt="USFCR Logo" />
            </Link>
          </Grid>
          <Grid item>
            <div className="menu-icon" onClick={toggleSidebar}>
              <MenuIcon />
            </div>
          </Grid>
        </Grid>
        <Sidebar isOpen={menuOpen} toggleSidebar={toggleSidebar} />
        
      </header>
    </>
  );
};

export default Header;
