import './App.scss';
import fetch from 'node-fetch';
import { useState, useEffect } from 'react';
import Login from './components/login/Login';
import Splash from './components/Splash/Splash';
import Home from './components/Home/Home';
import About from './components/About';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Sidebar from './components/sidebar/Sidebar';
const App = () => {

  const [messages, setMessages] = useState([])
  const [user, setUser] = useState('');

  const preparePost = (post) => ({
    text:post,
    user
  })

  const login = (userName) => {
    setUser(userName);
  };

  const createPost = async post => {
    const data = await preparePost(post);
    await fetch('/api/posts', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data)
    });
    await callApi();
  };

  const callApi = async () => {
    const response = await fetch('/api/posts');
    const body = await response.json();
    await setMessages(body)
  };

    useEffect(() => {
      return callApi()
  },[])

  // useEffect(() => localStorage.setItem(localStorageKey, JSON.stringify(tasks)));
  return(
    <div className="App">
      <Router>
        {user ? <Sidebar /> : ''}
        <Route exact path="/" component={Splash}/>
        <Route path="/login" render={(props) => (<Login {...props} login={login} /> )} />
        <Route path="/home" render={(props) => (<Home {...props} messages={messages} createPost={createPost} />)}/>
        <Route path="/about" render={(props) => (<About {...props} messages={messages} createPost={createPost} />)}/>
      </Router>
    </div>
  )
};

export default App;
