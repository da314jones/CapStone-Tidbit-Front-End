import React from 'react';
import BaseModal from './BaseModal';

export default function DirectMessagesModal({ isOpen, onClose, message, onSendMessage }) {
    const [newMessage, setNewMessage] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSendMessage(newMessage);
        setNewMessage('');
    };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
        <div className='message-list' >
            {message.map((msg, index) => (
                <div key={index} className='message'>{msg}</div>
            ))}
        </div>
      <form onSubmit={handleSubmit}>
        <input
        type='text'
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
        placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </BaseModal>
  );
}