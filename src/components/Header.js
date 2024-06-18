import React from "react";
import "../CSS/Header.css";
import cisco from "../cisco.png";
const Header = ({ toggleSidebar, startNewChat }) => {
  return (
    <div className="header">
      <div className="header-left">
        <button
          className="menu-icon"
          onClick={toggleSidebar}
          title="Open-Sidebar"
        >
          &#9776; {/* Unicode for the hamburger menu icon */}
        </button>
        <button
          className="new-chat-icon"
          onClick={startNewChat}
          title="New Chat"
        >
          +
        </button>
      </div>
      <img src={cisco} alt="Logo" className="header-logo" />

      <h1 className="header-title">ChatGPT Interface</h1>
    </div>
  );
};

export default Header;
