import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './secret.js';

function App() {
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
          {console.log(data.API_KEY)}
        </a>
      </header>
    </div>
  );
}

export default App;
