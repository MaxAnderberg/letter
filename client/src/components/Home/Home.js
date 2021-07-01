import MessageList from "../MessageList/MessageList";
import NewMessage from "../MessageList/NewMessage/NewMessage";

const Home = ({messages, createPost}) => {
  return (
    <div>
      <h1>Home</h1>
      <NewMessage createPost={createPost}/>
      <MessageList messages={messages}/>
    </div>
  )
}

export default Home
