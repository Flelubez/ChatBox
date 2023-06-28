import React, { useState } from "react";
import styles from "../styles/ChatBox.module.css";

const ChatBoxSender = ({
  sender,
  recipient,
  messages,
  onSendMessage,
  onEditMessage,
  onDeleteMessage,
}) => {
  const [messageText, setMessageText] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editMessageId, setEditMessageId] = useState(null);
  const [editMessageText, setEditMessageText] = useState("");

  const handleInputChange = (e) => {
    setMessageText(e.target.value);
  };

  const handleSendMessage = () => {
    const trimmedMessageText = messageText.trim();
    if (trimmedMessageText !== "") {
      onSendMessage({
        sender,
        recipient,
        message: trimmedMessageText,
      });
      setMessageText("");
    }
  };

  const handleEditMessage = (messageId, messageText) => {
    setEditMode(true);
    setEditMessageId(messageId);
    setEditMessageText(messageText);
  };

  const handleSaveMessage = () => {
    const trimmedEditMessageText = editMessageText.trim();
    if (trimmedEditMessageText !== "") {
      onEditMessage(editMessageId, trimmedEditMessageText);
      setEditMode(false);
      setEditMessageId(null);
      setEditMessageText("");
    }
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditMessageId(null);
    setEditMessageText("");
  };

  const handleDeleteMessage = (messageId) => {
    onDeleteMessage(messageId);
  };

  return (
    <div className={styles.container}>
      <div className={styles.chatBox}>
        <h2 className={styles.sender}>Expéditeur</h2>
        <ul className={styles.messageList}>
          {messages &&
            messages.map((message, index) => (
              <li
                key={index}
                className={`${styles.message} ${
                  message.sender === sender
                    ? styles.sentMessage
                    : styles.receivedMessage
                }`}
              >
                {editMode && editMessageId === index ? (
                  <input
                    type="text"
                    value={editMessageText}
                    onChange={(e) => setEditMessageText(e.target.value)}
                  />
                ) : (
                  <div className={styles.text}>{message.message}</div>
                )}
                {message.sender === sender && (
                  <div className={styles.messageActions}>
                    {editMode && editMessageId === index ? (
                      <div className={styles.buttonContainer}>
                        <button
                          onClick={handleSaveMessage}
                          className={styles.save}
                        >
                          Sauvegarder
                        </button>
                        <button
                          onClick={handleCancelEdit}
                          className={styles.cancel}
                        >
                          Annuler
                        </button>
                      </div>
                    ) : (
                      <div className={styles.buttonContainer}>
                        <button
                          onClick={() =>
                            handleEditMessage(index, message.message)
                          }
                          className={styles.edit}
                        >
                          Editer
                        </button>
                        <button
                          onClick={() => handleDeleteMessage(index)}
                          className={styles.delete}
                        >
                          Effacer
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </li>
            ))}
        </ul>
        <div className={styles.inputContainer}>
          <input
            type="text"
            placeholder="Saisissez le texte"
            value={messageText}
            onChange={handleInputChange}
          />
          <button onClick={handleSendMessage}>Envoyer</button>
        </div>
      </div>
    </div>
  );
};

export default ChatBoxSender;
