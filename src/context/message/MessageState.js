import React, { useReducer } from 'react';
import uuid from 'uuid';
import MessageContext from './messageContext';
import messageReducer from './messageReducer';

const MessageState = (props) => {
  const initialState = {
    messages: [
      {
        id: 1,
        message: 'Change networl card',
        attention: false,
        tech: 'John Doe',
        date: '2021-07-12T05:03:39.722Z',
      },
      {
        id: 2,
        message: 'Hard drive failed workStation 002 ',
        attention: true,
        tech: 'Sam Smith',
        date: '2021-07-06T07:22:09.581Z',
      },
      {
        message: 'Secrete Message',
        attention: false,
        tech: 'Sara Wilson',
        date: '2021-07-02T03:49:43.043Z',
        id: 3,
      },
      {
        id: 4,
        message: 'Test message first',
        attention: false,
        tech: 'Sara Wilson',
        date: '2021-07-07T04:58:12.404Z',
      },
    ],
  };

  const [state, dispatch] = useReducer(messageReducer, initialState);

  // Add Message

  // Delete Message

  return (
    <MessageContext.Provider
      value={{
        messages: state.messages,
      }}
    >
      {props.children}
    </MessageContext.Provider>
  );
};

export default MessageState;
