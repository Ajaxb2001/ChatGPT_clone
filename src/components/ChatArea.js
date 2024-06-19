import React, { useState, useEffect } from "react";
import { FaTelegramPlane, FaTrash } from "react-icons/fa";
import "../CSS/ChatArea.css";

const ChatArea = ({ messages, onSendMessage, onDeleteMessages }) => {
  const [input, setInput] = useState("");
  const [showPrompt, setShowPrompt] = useState(true);

  useEffect(() => {
    if (messages.length === 0) {
      setShowPrompt(true);
    }
  }, [messages]);

  useEffect(() => {
    if (input.trim() === "") {
      const promptTimeout = setTimeout(() => {
        setShowPrompt(true);
      }, 5000);

      return () => clearTimeout(promptTimeout);
    }
  }, [input]);

  const handleSend = () => {
    if (input.trim()) {
      onSendMessage({ text: input, sender: "user" });
      setInput("");
      setShowPrompt(false);

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
      <div className="header">
        {showPrompt && <p className="help-prompt">How can I help you today?</p>}
        <button onClick={onDeleteMessages} className="delete-button">
          <FaTrash className="delete-icon" />
        </button>
      </div>
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
          onKeyDown={handleKeyPress}
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
