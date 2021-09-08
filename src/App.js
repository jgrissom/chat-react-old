// Repository:  chat-react
// Author:      Jeff Grissom
// Version:     1.xx
import './App.css';
import React, {useState,useEffect} from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import ChatForm from './Components/ChatForm';
import ChatMessage from './Components/ChatMessage';

function App() {
  const [chat, setChat] = useState([]);
  // const chatHubEndPoint = "https://localhost:5001/hubs/chat";
  const chatHubEndPoint = "https://aws-chat.azurewebsites.net/hubs/chat";
  const [ connection, setConnection] = useState(null);

  // componentDidMount
  useEffect(() => {
    const newConnection = new HubConnectionBuilder()
      .withUrl(chatHubEndPoint)
      .withAutomaticReconnect()
      .build();

    setConnection(newConnection);
  }, []);

  // componentDidUpdate (changes to connection)
  useEffect(() => {
    if (connection) {
      connection.start()
        .then(() => {
          console.log('Connected!');
        })
        .catch(e => console.log('Connection failed: ', e));
    }
  }, [connection]);

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
