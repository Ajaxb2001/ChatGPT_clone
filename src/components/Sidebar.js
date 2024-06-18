import React from "react";
import "../CSS/Sidebar.css";
import { FaHome, FaComments, FaCog, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile">
        <h3 className="profile-name">ChatGPT</h3>
      </div>
      <h2 className="sidebar-title">Menu</h2>
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <a href="#home">
            <FaHome className="sidebar-icon" /> Home
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#chat">
            <FaComments className="sidebar-icon" /> Chat
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#settings">
            <FaCog className="sidebar-icon" /> Settings
          </a>
        </li>
        <li className="sidebar-item">
          <a href="#logout">
            <FaSignOutAlt className="sidebar-icon" /> Logout
          </a>
        </li>
      </ul>
      <div className="sidebar-footer">
        <p>© 2024 ChatGPT</p>
      </div>
    </div>
  );
};

export default Sidebar;
