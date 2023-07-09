import React, { useState } from 'react';
import MessageForm from './MessageForm';

const ChatRoom = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    const newMessage = {
      username: 'John', // Replace with the actual logged-in username
      content: message,
      timestamp: new Date().toLocaleString(),
    };

    setMessages([...messages, newMessage]);
  };

  return (
    <div>
      <h2>Chat Room</h2>
      {/* Render messages */}
      <div className="message-list">
        {messages.map((message, index) => (
          <div className="message" key={index}>
            <span className="message-username">{message.username}:</span>
            <span className="message-content">{message.content}</span>
            <span className="message-timestamp">{message.timestamp}</span>
          </div>
        ))}
      </div>
      {/* Render message form */}
      <MessageForm onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatRoom;
