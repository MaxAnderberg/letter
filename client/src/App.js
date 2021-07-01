import logo from './logo.svg';
import './App.scss';
import fetch from 'node-fetch';
import { useState } from 'react';
import Login from './components/login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

const App = () => {
  
  const [messages, setMessages] = useState([])
  const [user, setUser] = useState('Max');
  const callApi = async () => {
    console.log('Hello World')
    
    const response = await fetch('/api/posts');
    const body = await response.json();
    setMessages(body)
    console.log(body)
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  return (
    <div className="App">
      {/* <button onClick={callApi}>Click Me</button>
      {messages.map((i) => i.text)} */}
      <Login />
    </div>
  );
};

export default App;
