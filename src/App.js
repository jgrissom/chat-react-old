// Repository:  chat-react
// Author:      Jeff Grissom
// Version:     1.xx
import './App.css';
import React, {useState, useEffect, useRef} from 'react';
import { HubConnectionBuilder } from '@microsoft/signalr';
import ChatForm from './Components/ChatForm';
import ChatMessage from './Components/ChatMessage';

function App() {
  const [chat, setChat] = useState([]);
  // const chatHubEndPoint = "https://localhost:5001/hubs/chat";
  const chatHubEndPoint = "https://aws-chat.azurewebsites.net/hubs/chat";
  const [ connection, setConnection] = useState(null);
  const latestChat = useRef(null);
  latestChat.current = chat;

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

          connection.on('ReceiveMessage', m => {
            const updatedChat = [...latestChat.current];
            updatedChat.push(m);
            setChat(updatedChat);
          });
        })
        .catch(e => console.log('Connection failed: ', e));
    }
  }, [connection]);

  const handleSend = async (chatMessage) => {
    const m = {name: chatMessage.name, message: chatMessage.message};
    await connection.send('SendMessage', m);
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
