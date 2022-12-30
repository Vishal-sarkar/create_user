import React, { useEffect, useState } from 'react';
import Form from "./components/Form.js";
import GetNum from "./components/GetNum.js";
import Verified from "./components/Verified.js";
import './App.css';

function App() {
  const [getNum, setGetNum] = useState(0);
  
  const getPhone = () => {
    let numbr = document.getElementById("number").value;
    let x = parseInt(Math.random()*1000000);
      if(x > 99999) {
        document.cookie = `mobileNum=${numbr};`;
        document.cookie = `OTP=${x}`;
      }else{
        getPhone()
      }
    // document.cookie = "mobileNum=3333333333; expires=Fri, 30 Dec 2022 06:20:04 GMT";
    // document.cookie = "OTP=896241; expires=Fri, 30 Dec 2022 06:20:04 GMT";
  }
 
      if (getNum === 0) {
       return <GetNum getPhone={getPhone} setGetNum={setGetNum}/>
      }else if(getNum === 1){
       return <Form setGetNum={setGetNum}/>
      }else if(getNum === 2){
        return <Verified />  
      }
        
    
   ;
}

export default App;
