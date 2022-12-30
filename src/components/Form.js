import React, { useEffect } from "react";
import './Form.css';

function Form({setGetNum}) {
    let button = document.querySelector("button");
    let otpVal;
    let stOtp;
    let stMobile;
    const getData = ()=>{
        let inputs = document.querySelectorAll("input");
        button = document.querySelector("button");
        
        inputs.forEach((input, index1) => {
            input.addEventListener("keyup", (e) => {
                const currentInput = input,
                nextInput = input.nextElementSibling,
                prevInput = input.previousElementSibling;
                if (currentInput.value.length > 1) {
                    currentInput.value = "";
                    return;
                }
                if (nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== "") {
                    nextInput.removeAttribute("disabled");
                    nextInput.focus();
                }
                if(e.key === "Backspace"){
                    inputs.forEach((input, index2) => {
                        if (index1 <= index2 && prevInput) {
                            input.setAttribute("disabled", true);
                            currentInput.value = "";
                            prevInput.focus();
                        }
                    });
                }
                if (!inputs[5].disabled && inputs[5].value !== "") {
                    button.classList.add("active");
                    return;
                }
                button.classList.remove("active");
            });
        });
        window.addEventListener("load", () => inputs[0].focus());
    };

const getValue = () => {
    let inputs = document.querySelectorAll("input");
    const value1 = inputs[0].value;
    const value2 = inputs[1].value;
    const value3 = inputs[2].value;
    const value4 = inputs[3].value;
    const value5 = inputs[4].value;
    const value6 = inputs[5].value;
    otpVal = [value1,value2, value3, value4, value5, value6].join('');
    // console.log(otpVal);
    
}
useEffect(()=>{
    getData();
})

const getCookie = () =>{
    if (document.cookie.length !== 0)
    {
        var cookiesArray = document.cookie.split("; ");

        for (var i = 0; i < cookiesArray.length; i++)
        {
            var nameValueArray = cookiesArray[i].split("=");

            if (nameValueArray[0] === "mobileNum")
            {
                stMobile = nameValueArray[1];
            }
            else if (nameValueArray[0] === "OTP")
            {
                stOtp= nameValueArray[1];

            }
            if(stOtp === otpVal){
                setGetNum(2);
            }else{
                setGetNum(1);
            }
        }
        
    }
    else
    {
        alert("Cookies not found");
    }
    
}

return (
    <div className="container">
    <header>
        <i className="bx bxs-check-shield"></i>
    </header>
    <h4>Enter OTP Code</h4>
    <form action="#">
        <div className="input-field">
        <input id="1" type="number" />
        <input id="2" type="number" disabled />
        <input id="3" type="number" disabled />
        <input id="4" type="number" disabled />
        <input id="5" type="number" disabled />
        <input id="6" type="number" disabled />
        </div>
        <button 
        onClick={()=>{
            getValue();
            getCookie();
        }}>
                Verify OTP
        </button>
    </form>
    </div>
);
}

export default Form;
