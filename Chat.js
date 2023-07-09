import React, { useState } from 'react';
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
        <Row className="justify-content-center">
          <Col xs={12} sm={8} md={6}>
            <Card>
              <CardHeader>Login</CardHeader>
              <CardBody>
                <Form onSubmit={handleLogin}>
                  <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button color="primary" type="submit" block>
                    Login
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center mt-3">
          <Col xs={12} sm={8} md={6}>
            <Card>
              <CardHeader>Register</CardHeader>
              <CardBody>
                <Form onSubmit={handleRegister}>
                  <Input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button color="primary" type="submit" block>
                    Register
                  </Button>
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6}>
          <Card>
            <CardHeader>Chat Room</CardHeader>
            <CardBody>
              {messages.map((msg, index) => (
                <Card key={index} className="mb-3">
                  <CardBody>
                    <div className="d-flex justify-content-between">
                      <span className="username">{msg.username}</span>
                      <span className="timestamp">{msg.timestamp}</span>
                      <button
                        className="delete-button"
                        onClick={() => handleDeleteMessage(index)}
                      >
                        Delete
                      </button>
                    </div>
                    <div className="message-content">{msg.text}</div>
                  </CardBody>
                </Card>
              ))}
            </CardBody>
            <CardFooter>
              <Form onSubmit={handleSendMessage}>
                <Input
                  type="text"
                  placeholder="Type your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Button color="primary" type="submit" block>
                  Send
                </Button>
              </Form>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatApp;
