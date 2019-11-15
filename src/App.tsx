import React from 'react';
import logo from './logo.svg';
import './App.css';
import Honeybadger from 'honeybadger-js';

function App() {
  const config = {
    apiKey: process.env.REACT_APP_HONEYBADGER_API_KEY || '',
    environment: process.env.NODE_ENV,
    revision: process.env.REACT_APP_SOURCE_VERSION
  };
  
  Honeybadger.configure(config)

  const handleClickI = () => {
    Honeybadger.notify(new Error('sdfsdf'));
  };

  const handleClickII = () => {
    Honeybadger.setContext({ userId: 'dfsdfsdf' });
  }

  return (
    <div className="App">
      <button onClick={handleClickI}>BUTTON</button>
      <button onClick={handleClickII}>OTHER BUTTON</button>
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
      </header>
    </div>
  );
}

export default App;
