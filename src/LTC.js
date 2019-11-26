import React, { useState, useEffect } from 'react'
import { Client } from 'coinbase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LTC = (props) => {
  const { API_KEY, API_SECRET, audio } = props
  const [ltc, setLTC] = useState('')

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
        <div>
            <p>
                <span>
                  LTC is: <code>{ltc}</code> 
                </span>
            </p>
        </div>
     );
}
 
export default LTC;