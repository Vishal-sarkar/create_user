import React, { useEffect } from "react";
import "./GetNum.css";

function GetNum({setGetNum,getPhone}) {
  useEffect(() => {
    let input = document.querySelector("input");
    let button = document.querySelector("button");
    input.addEventListener("keyup", (e) => {
      if (input.value.length === 10) {
        button.classList.add("active");
        return;
      }
      button.classList.remove("active");
    });
  });
  return (
    <div className="container">
      <header>
        <i className="bx bxs-check-shield"></i>
      </header>
      <h4>Enter Phone Number</h4>
      <form action="#">
        <div className="input-field">
          <input id="number" maxLength={10} />
        </div>
        <button 
        onClick={()=>{
            setGetNum(1);
            getPhone();
        }}>
            Sent OTP
        </button>
      </form>
    </div>
  );
}

export default GetNum;
