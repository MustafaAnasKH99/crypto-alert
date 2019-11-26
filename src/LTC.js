import React, { useState } from 'react'
import { Client } from 'coinbase'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LTC = (props) => {
  const { API_KEY, API_SECRET, audio } = props
  const client = new Client({'apiKey': API_KEY, 'apiSecret': API_SECRET, strictSSL: false});
  
  const [ltc, setLTC] = useState('')

  let expected_buy_ltc = 55;
  let expected_sell_ltc = 75;

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
        <span>
          LTC is: <code>{ltc}</code> 
        </span>
     );
}
 
export default LTC;