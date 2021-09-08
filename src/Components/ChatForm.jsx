import React, {useState} from 'react';

const ChatForm = (props) => {
  const { onSend } = props;
  const [ name, setName ] = useState('');
  const [ message, setMessage ] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSend({ name, message });
  }
  
  return (
    <form onSubmit={handleSubmit} className='Chat-form'>
      <input 
        type="text" 
        id="name" 
        onChange={ (e) => setName(e.target.value) }
        name="name"
        value={name}
        placeholder="Name"
        autoFocus
        autoComplete="off"
        autoCapitalize="off">
      </input><br />
      <input
        disabled={ name.trim().length === 0 }
        type="text" 
        id="Message" 
        onChange={ (e) => setMessage(e.target.value) }
        name="message"
        value={message}
        placeholder="Message"
        autoComplete="off"
        autoCapitalize="off">
      </input><br />
      <button 
        disabled={ name.trim().length === 0 || message.trim().length === 0 }  
        type="submit">
          Send Message
      </button>
    </form>
  );
}

export default ChatForm;
