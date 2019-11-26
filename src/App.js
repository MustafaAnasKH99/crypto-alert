import React, { useState, useEffect } from 'react';
import { Client } from 'coinbase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import logo from './logo.svg';
import './App.css';
import data from './secret.js';
import soundFile from './assets/notification.mp3' 

function App() {
  const [ltc, setLTC] = useState('')
  const { API_KEY, API_SECRET } = data
  const audio = new Audio(soundFile)

  let expected_buy_ltc = 55;
  let expected_sell_ltc = 75;

  let expected_sell_xlm = 0.09;
  let expected_buy_xlm = 0.07;

  const client = new Client({'apiKey': API_KEY, 'apiSecret': API_SECRET, strictSSL: false});

  useEffect(() => {

  })

  setInterval(() => {
    client.getBuyPrice({'currencyPair': 'LTC-CAD'},  (err, obj) => {
      if(err) console.log(err)
      if(obj != null){
        setLTC(obj.data.amount)
      } 
    });
  }, 3000)

  if(ltc <= expected_buy_ltc){
    if(ltc !== ''){
      audio.play()
      toast('Buy LTC NOW')
    } 
  } else if (ltc >= expected_sell_ltc){
    toast('SELL LTC NOW 🚀')
  }
  

  return (
    <div className="App">
      <ToastContainer />
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
        <p>
          LTC is:  <code>{ltc}</code>
        </p>
      </header>
    </div>
  );
}

export default App;
