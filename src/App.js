import React, { useEffect, useState } from 'react';
import Form from "./components/Form.js";
import GetNum from "./components/GetNum.js";
import './App.css';

function App() {
  const [getNum, setGetNum] = useState(0);
 
  const getPhone = () => {
    let numbr = document.getElementById("number").value;
    
  }
 
      if (getNum === 0) {
       return <GetNum getPhone={getPhone} setGetNum={setGetNum}/>
      }else{
       return <Form />
      }     
    
   ;
}

export default App;
