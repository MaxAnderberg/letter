import { useState } from "react";
import './NewMessage.scss'
const NewMessage = ({ createPost }) => {

  const [messageText, setMessageText] = useState('');

  const handleSubmit = (event) => {
    console.log('Handle submit in new message')
    event.preventDefault();
    createPost(messageText);
    setMessageText('');
  }

  return (
    <section className="new-message-container">
      <form onSubmit={handleSubmit} className="new-message-form">
        <input className="new-message__input" type="text" name="" id="" value={messageText} required placeholder="Share something!" onChange={(event) => setMessageText(event.target.value)} />
        <input className="new-message__submit" type="submit" value="Post" />
      </form>
    </section>
  )
}

export default NewMessage
