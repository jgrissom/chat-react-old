// Repository:  chat-react
// Author:      Jeff Grissom
// Version:     1.xx
import './App.css';
import React from 'react';
import ChatForm from './Components/ChatForm';
import ChatMessage from './Components/ChatMessage';

function App() {
  return (
    <React.Fragment>
      <ChatForm />
      <div className='Chat-messages'>
        <ChatMessage />
      </div>
    </React.Fragment>
  );
}

export default App;
