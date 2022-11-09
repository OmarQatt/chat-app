import styles from './styles.module.css';
import RoomAndUsersColumn from './room'; 
import SendMessage from './sendMessage';
import MessagesReceived from './message';

const Chat = ({ username, room, socket }) => {
  return (
    <div className={styles.chatContainer}>
     
      <RoomAndUsersColumn socket={socket} username={username} room={room} />

      <div>
        <MessagesReceived socket={socket} />
        <SendMessage socket={socket} username={username} room={room} />
      </div>
    </div>
  );
};

export default Chat;