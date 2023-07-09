// src/redux/reducers.js

const initialState = {
    user: null,
    messages: [],
  };
  
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'LOGIN_USER':
        return {
          ...state,
          user: action.payload,
        };
      case 'LOGOUT_USER':
        return {
          ...state,
          user: null,
        };
      case 'ADD_MESSAGE':
        return {
          ...state,
          messages: [...state.messages, action.payload],
        };
      case 'DELETE_MESSAGE':
        return {
          ...state,
          messages: state.messages.filter(
            (message) => message.id !== action.payload
          ),
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;
  