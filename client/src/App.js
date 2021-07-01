import logo from './logo.svg';
import './App.scss';
import fetch from 'node-fetch';
import { useState, useEffect } from 'react';
import Login from './components/login/Login';
import Splash from './components/Splash/Splash';
import Home from './components/Home/Home';
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

  const preparePost = (post) => ({
      text:post,
      user
    })

  const createPost = async post => {
    console.log('create post in App js')
    const data = await preparePost(post);
    console.log(data)
    await fetch('/api/posts', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    await callApi();
  };

  const callApi = async () => {
    console.log('calling the api')
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
        <Route exact path="/" component={Splash}/>
        <Route path="/login" component={Login}/>
        {/* The routes below I want protected when not logged in 
          Additionally, I think I can write a checker that will only display 
          the sidebar etc if the user is logged in. I'll have to look that up later though
        */}
        <Route path="/home" render={(props) => (<Home {...props} messages={messages} createPost={createPost} />)}/>
      </Router>
      
    </div>
  )
};

export default App;
