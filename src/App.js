import React, { useState, useEffect } from "react";
import Form from "./components/Form.js";
import GetNum from "./components/GetNum.js";
import Verified from "./components/Verified.js";
import CreateUser from "./components/CreateUser";
import base from "./api/base";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [userID, setUserID] = useState("");
  // let numbr
  useEffect(() => {
    base("Table 1")
      .select({
        view: "Grid view",
      })
      .eachPage((records, fetchNextPage) => {
        setData(records);
        fetchNextPage();
      });

  });

  const [getNum, setGetNum] = useState(0);
  const getPhone = () => {
    let numbr = document.getElementById("number").value;
    let x = parseInt(Math.random() * 1000000);
    if (x > 99999) {
      document.cookie = `mobileNum=${numbr};`;
      document.cookie = `OTP=${x}`;
    } else {
      getPhone();
    }
    // document.cookie = "mobileNum=3333333333; expires=Fri, 30 Dec 2022 06:20:04 GMT";
    // document.cookie = "OTP=896241; expires=Fri, 30 Dec 2022 06:20:04 GMT";
  };
  const checkPhone = (stMobile) => {
    data.map((e)=>{
      if (e.fields.Mobile == stMobile) {
        setUserID(e.id);
      }
    })
  }

  if (getNum === 0) {
    return <GetNum getPhone={getPhone} setGetNum={setGetNum} />;
  } else if (getNum === 1) {
    return <Form setGetNum={setGetNum} checkPhone={checkPhone}/>;
  } else if (getNum === 2) { 
    return (  
      <>
      {userID.length > 0 ? (  
            <Verified data={userID}/>    
      ):(
        <CreateUser/>
      )}  
      </>
    );
  }
}

export default App;
