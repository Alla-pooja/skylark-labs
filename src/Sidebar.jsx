// Sidebar.js

import React from 'react';
import { Link } from 'react-router-dom';
import CloseIcon from "@material-ui/icons/Close";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <button className="close-btn" onClick={toggleSidebar}>
        <CloseIcon />
      </button>
      <div className='links'>
      <nav>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/capabilities">Capabilities</Link></li>
          <li><Link to="/aboutplatform">Demo</Link></li>
          <li><Link to="/performance">Past Performance</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      </div>
    </div>
  );
};

export default Sidebar;
