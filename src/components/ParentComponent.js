// ParentComponent.js
import React, { useState } from "react";
import ChatArea from "./ChatArea";
// ... other imports

const ParentComponent = () => {
  const [messages, setMessages] = useState([]); // Initial state for messages

  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
  };

  const handleClearMessages = () => {
    setMessages([]); // Clear all messages
  };

  // ... other code

  return (
    <ChatArea
      messages={messages}
      onSendMessage={handleSendMessage}
      onClearMessages={handleClearMessages}
    />
  );
};

export default ParentComponent;
