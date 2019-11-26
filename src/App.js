import React, { useState, useEffect } from 'react';
import { Client } from 'coinbase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import logo from './logo.svg';
import './App.css';
import data from './secret.js';
import soundFile from './assets/notification.mp3' 

import LTC from './LTC'

function App() {
  const { API_KEY, API_SECRET } = data
  const audio = new Audio(soundFile)
  

  return (
    <div className="App">
      <ToastContainer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <LTC audio={audio} API_KEY={API_KEY} API_SECRET={API_SECRET} />
      </header>
    </div>
  );
}

export default App;
