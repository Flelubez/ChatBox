import React, { useState } from 'react';
import ChatBoxSender from './ChatBoxSender';
import ChatBoxReceiver from './ChatBoxReceiver';
import styles from '../styles/ChatBox.module.css';

const ChatApp = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
  };

  const handleEditMessage = (messageId, newMessageText) => {
    const updatedMessages = [...messages];
    updatedMessages[messageId].message = newMessageText;
    setMessages(updatedMessages);
  };

  const handleDeleteMessage = (messageId) => {
    const updatedMessages = messages.filter((_, index) => index !== messageId);
    setMessages(updatedMessages);
  };

  return (
    <div className={styles.chatApp}>
      <ChatBoxSender
        sender="Expediteur"
        recipient="Destinataire"
        messages={messages}
        onSendMessage={handleSendMessage}
        onEditMessage={handleEditMessage}
        onDeleteMessage={handleDeleteMessage}
      />
      <ChatBoxReceiver
        sender="Destinataire"
        recipient="Expediteur"
        messages={messages}
        onSendMessage={handleSendMessage}
        onEditMessage={handleEditMessage}
        onDeleteMessage={handleDeleteMessage}
      />
    </div>
  );
};

export default ChatApp;