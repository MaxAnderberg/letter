import Message from "./Message/Message"
import NewMessage from "./NewMessage/NewMessage"
const Combo = ({messages, createPost}) => {
    console.log(messages)
    return (
        <div>
            <NewMessage createPost={createPost}/>
            {messages.map(item => <Message key={item.id} message={item} />)}
        </div>
    )
}

export default Combo
