import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import'./component/Chat'
import ChatApp from './component/Chatapp';
import Chat from'./component/Chat';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<Chat></Chat>
<ChatApp></ChatApp>
</>
);

reportWebVitals();
