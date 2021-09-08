// Repository:  chat-react
// Author:      Jeff Grissom
// Version:     1.xx
import './App.css';
import React, {useState} from 'react';
import ChatForm from './Components/ChatForm';
import ChatMessage from './Components/ChatMessage';

function App() {
  const [chat, setChat] = useState([]);
  const handleSend = (chatMessage) => {
    let mutableChat = [...chat];
    mutableChat.push(chatMessage);
    setChat(mutableChat);
  }

  return (
    <React.Fragment>
      <ChatForm onSend={handleSend} />
      <div className='Chat-messages'>
        { chat.map(c =>
          <ChatMessage key={Date.now() * Math.random()} chat={c} />
        )}
      </div>
    </React.Fragment>
  );
}

export default App;
