import React, { useState } from "react";
import { FaTelegramPlane } from "react-icons/fa"; // Import the clear icon
import "../CSS/ChatArea.css";

const ChatArea = ({ messages, onSendMessage }) => {
  const [input, setInput] = useState("");
  const [showPrompt, setShowPrompt] = useState(true); // State to control the visibility of the prompt

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage({ text: input, sender: "user" });
      setInput("");
      setShowPrompt(false); // Hide the prompt after sending a message
      // Simulate bot response for demonstration purposes
      setTimeout(() => {
        onSendMessage({
          text: "This is a placeholder response from ChatGPT",
          sender: "bot",
        });
      }, 1000);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="chat-area">
      {showPrompt && <p className="help-prompt">How can I help you today?</p>}{" "}
      {/* Conditional rendering */}
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress} // Call handleKeyPress on key down
          placeholder="Type a message..."
          className="input-field"
        />
        <button onClick={handleSend} className="send-button">
          <FaTelegramPlane className="send-icon" />
        </button>
      </div>
    </div>
  );
};

export default ChatArea;
