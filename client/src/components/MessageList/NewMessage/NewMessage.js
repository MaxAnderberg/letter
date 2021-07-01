import { useState } from "react";

const NewMessage = ({ createPost }) => {

  const [messageText, setMessageText] = useState('');

  const handleSubmit = (event) => {
    console.log('Handle submit in new message')
    event.preventDefault();
    createPost(messageText);
    setMessageText('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="" id="" value={messageText} onChange={(event) => setMessageText(event.target.value)} />
      <input type="submit" value="Post" />
    </form>
  )
}

export default NewMessage
