import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import logo from './logo.svg';
import './App.css'; 
import data from './secret.js';
import soundFile from './assets/notification.mp3' 

import LTC from './LTC'
import XLM from './XLM'

function App() {
  const { API_KEY, API_SECRET } = data
  const audio = new Audio(soundFile)
  

  return (
    <div className="App">
      <ToastContainer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="body grid-container">
          <div className="grid-item item-1">
              <LTC audio={audio} API_KEY={API_KEY} API_SECRET={API_SECRET} />
          </div>
          <div className="grid-item item-2">
              <XLM audio={audio} API_KEY={API_KEY} API_SECRET={API_SECRET} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
