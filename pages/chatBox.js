import ChatApp from '@/components/ChatApp';
import styles from '../styles/ChatBox.module.css'

function chatBox() {
  return (
    <div className={styles.page}>
      <ChatApp />
    </div>
  );
}

export default chatBox;