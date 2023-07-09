import React, { useState, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from 'reactstrap';

const ChatApp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Simulate receiving new messages every 2 seconds
    const interval = setInterval(() => {
      const newMessage = {
        username: 'DummyUser',
        text: 'This is a new message',
        timestamp: new Date().toLocaleString(),
      };
      setMessages([...messages, newMessage]);
    }, 2000);

    return () => clearInterval(interval);
  }, [messages]);

  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login validation here
    setLoggedIn(true);
  };

  const handleRegister = (e) => {
    e.preventDefault();
    // Perform registration logic here
    setLoggedIn(true);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    // Perform sending message logic here
    const newMessage = {
      username: username,
      text: message,
      timestamp: new Date().toLocaleString(),
    };
    setMessages([...messages, newMessage]);
    setMessage('');
  };

  const handleDeleteMessage = (index) => {
    // Perform message deletion logic here
    const updatedMessages = messages.filter((_, i) => i !== index);
    setMessages(updatedMessages);
  };

  if (!loggedIn) {
    return (
      <Container>
        {/* ... Login/Register code as before ... */}
      </Container>
    );
  }

  return (
    <Container>
      {/* ... Chat Room code as before ... */}
    </Container>
  );
};

export default ChatApp;
