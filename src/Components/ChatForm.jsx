import React from 'react';

const ChatForm = () => {
  return (
    <form className='Chat-form'>
      <input 
        type="text" 
        id="name" 
        placeholder="Name"
        autoFocus
        autoComplete="off"
        autoCapitalize="off">
      </input><br />
      <input
        type="text" 
        id="Message" 
        placeholder="Message"
        autoComplete="off"
        autoCapitalize="off">
      </input><br />
      <button type="submit">
        Send Message
      </button>
    </form>
  );
}

export default ChatForm;
