import MessageList from "../MessageList/MessageList";
import NewMessage from "../MessageList/NewMessage/NewMessage";
import '../Main.scss';
const Home = ({messages, createPost}) => {
  return (
    <div className="main-content-container">
      <MessageList messages={messages} createPost={createPost}/>
    </div>
  )
}

export default Home
