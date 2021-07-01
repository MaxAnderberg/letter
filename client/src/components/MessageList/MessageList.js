import './MessageList.scss';
import Message from './Message/Message';
import NewMessage from './NewMessage/NewMessage';
import Combo from './Combo';

const MessageList = ({ messages, createPost }) => {
    return (
      <div className="message-list-container">
        <div>
            <NewMessage createPost={createPost}/>
            {messages.map(item => <Message key={item.id} message={item} />)}
        </div>
      </div>
    );
}

export default MessageList
