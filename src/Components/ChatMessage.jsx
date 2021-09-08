import React from 'react';

const ChatMessage = (props) => {
  const {chat} = props;

  return (
    <div className="Chat-message">
      <span>{chat.name} &gt;</span> {chat.message}
    </div>
  );
}

export default ChatMessage;
