import {useState} from 'react';
import Message from './Message/Message';

const MessageList = ({ messages }) => {

    return (
      <div className="App">
          {messages.map(item => <Message key={item.id} message={item} />)}
        {messages.map((i) => i.text)}
      </div>
    );
}

export default MessageList
