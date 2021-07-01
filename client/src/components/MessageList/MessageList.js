import './MessageList.scss';
import Message from './Message/Message';

const MessageList = ({ messages }) => {
    return (
      <div className="message-list-container">
          {messages.map(item => <Message key={item.id} message={item} />)}
      </div>
    );
}

export default MessageList
