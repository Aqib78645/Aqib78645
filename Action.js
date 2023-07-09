// src/redux/actions.js

export const loginUser = (username) => {
    return {
      type: 'LOGIN_USER',
      payload: username,
    };
  };
  
  export const logoutUser = () => {
    return {
      type: 'LOGOUT_USER',
    };
  };
  
  export const addMessage = (message) => {
    return {
      type: 'ADD_MESSAGE',
      payload: message,
    };
  };
  
  export const deleteMessage = (messageId) => {
    return {
      type: 'DELETE_MESSAGE',
      payload: messageId,
    };
  };
  