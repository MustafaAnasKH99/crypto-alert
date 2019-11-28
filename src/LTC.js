import React, { useState, useEffect } from 'react'
import { Client } from 'coinbase'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LTC = (props) => {
  const { API_KEY, API_SECRET, audio } = props
  const client = new Client({'apiKey': API_KEY, 'apiSecret': API_SECRET, strictSSL: false});
  
  const [ltc, setLTC] = useState('')
  const [mean_ltc, setMeanLTC] = useState([])

  let expected_buy_ltc = 55;
  let expected_sell_ltc = 75;

  useEffect(() => {
    setTimeout(() => {
      client.getBuyPrice({'currencyPair': 'LTC-CAD'},  (err, obj) => {
        if(err) console.log(err)
        if(obj != null){
          setLTC(obj.data.amount)
        } 

        setMeanLTC([...mean_ltc, parseFloat(obj.data.amount)])
      });
    }, 30000)
  });

  if(ltc <= expected_buy_ltc){
    if(ltc !== ''){
      audio.play()
      toast('Buy LTC NOW')
    } 
  } else if (ltc >= expected_sell_ltc){
    toast('SELL LTC NOW 🚀')
  }

  let final_mean = 0
  mean_ltc.map(e => {
    return final_mean += e
  }) 

    return (
        <span>
          LTC is: <code>{ltc}</code>
          <br />
          <strong>Mean</strong> 
          LTC: <code>{ Number((final_mean / mean_ltc.length).toFixed(2)) }</code>
        </span>
     );
}
 
export default LTC;