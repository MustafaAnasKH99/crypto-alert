import React, { useState, useEffect } from 'react'
import { Client } from 'coinbase'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const XLM = (props) => {
  const { API_KEY, API_SECRET, audio } = props
  const client = new Client({'apiKey': API_KEY, 'apiSecret': API_SECRET, strictSSL: false});
  
  const [xlm, setXLM] = useState('')
  const [mean_xlm, setMeanXLM] = useState([])

  let expected_sell_xlm = 0.09;
  let expected_buy_xlm = 0.07;

  useEffect(() => {
    setTimeout(() => {
      client.getBuyPrice({'currencyPair': 'XLM-CAD'},  (err, obj) => {
        if(err) console.log(err)
        if(obj != null){
          setXLM(obj.data.amount)
        } 

        setMeanXLM([...mean_xlm, parseFloat(obj.data.amount)])
      });
    }, 30000)
  });

  if(xlm <= expected_buy_xlm){
    if(xlm !== ''){
      audio.play()
      toast('Buy XLM NOW 🚀')
    } 
  } else if (xlm >= expected_sell_xlm){
    toast('SELL XLM NOW 🚀')
  }

  let final_mean = 0
  mean_xlm.map(e => {
    return final_mean += e
  }) 

    return (
        <span>
            XLM is: <code>{xlm}</code>
            <br />
            <strong>Mean</strong> 
            XLM: <code>{ Number((final_mean / mean_xlm.length).toFixed(4)) }</code>
        </span>
     );
}
 
export default XLM;