import logo from './logo.svg';
import './App.css';
import fetch from 'node-fetch';

const App = () => {
  const callApi = async () => {
    console.log('Hello World')
    const response = await fetch('/api/posts');
    const body = await response.json();
    console.log(body)
    if (response.status !== 200) throw Error(body.message);
    return body;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <button onClick={callApi}>Click Me</button>

      </header>
    </div>
  );
};

export default App;
