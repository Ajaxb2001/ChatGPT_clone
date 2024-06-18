import React, { useState, useCallback } from "react";
import Sidebar from "./components/Sidebar";
import ChatArea from "./components/ChatArea";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  const [chats, setChats] = useState([{ id: 1, messages: [] }]);
  const [activeChatId, setActiveChatId] = useState(1);

  const toggleSidebar = useCallback(() => {
    setSidebarVisible((prevIsSidebarVisible) => !prevIsSidebarVisible);
  }, []);

  const startNewChat = useCallback(() => {
    setChats((prevChats) => {
      const newChatId = prevChats.length + 1;
      return [...prevChats, { id: newChatId, messages: [] }];
    });
    setActiveChatId(chats.length + 1);
  }, [chats.length]);

  const handleSendMessage = useCallback((chatId, message) => {
    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === chatId
          ? { ...chat, messages: [...chat.messages, message] }
          : chat
      )
    );
  }, []);

  const activeChat = chats.find((chat) => chat.id === activeChatId);

  return (
    <div className="app-container">
      {isSidebarVisible && <Sidebar />}
      <div
        className={`main-container ${isSidebarVisible ? "with-sidebar" : ""}`}
      >
        <Header toggleSidebar={toggleSidebar} startNewChat={startNewChat} />
        <div className="chat-container">
          <ChatArea
            messages={activeChat?.messages || []}
            onSendMessage={(message) =>
              handleSendMessage(activeChatId, message)
            }
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
