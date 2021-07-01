import logo from './logo.svg';
import './App.scss';
import fetch from 'node-fetch';
import { useState } from 'react';
import Login from './components/login/Login';
import Splash from './components/Splash/Splash';
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
  return(
    <div className="App">
      <Router>
        <Route exact path="/" component={Splash}/>
        <Route path="/login" component={Login}/>
      </Router>
      
    </div>
  )
};

export default App;
