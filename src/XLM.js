import React, { useState } from 'react'
import { Client } from 'coinbase'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const XLM = (props) => {
  const { API_KEY, API_SECRET, audio } = props
  const client = new Client({'apiKey': API_KEY, 'apiSecret': API_SECRET, strictSSL: false});
  
  const [xlm, setXLM] = useState('')

  let expected_sell_xlm = 0.09;
  let expected_buy_xlm = 0.07;

  setInterval(() => {
    client.getBuyPrice({'currencyPair': 'XLM-CAD'},  (err, obj) => {
      if(err) console.log(err)
      if(obj != null){
        setXLM(obj.data.amount)
      } 
    });
  }, 3000)

  if(xlm <= expected_buy_xlm){
    if(xlm !== ''){
      audio.play()
      toast('Buy XLM NOW 🚀')
    } 
  } else if (xlm >= expected_sell_xlm){
    toast('SELL XLM NOW 🚀')
  }
  toast('SELL XLM NOW 🚀')
    return (
        <span>
            XLM is: <code>{xlm}</code> 
        </span>
     );
}
 
export default XLM;