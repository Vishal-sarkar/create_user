import React, { useEffect, useState } from "react";
import './Form.css';

function App() {
    const [clicked, setClicked] = useState(false);
    const getData = ()=>{
        let inputs = document.querySelectorAll("input");
        let button = document.querySelector("button");
        // console.log(button, inputs);
        
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
                if (!inputs[3].disabled && inputs[3].value !== "") {
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
    const otpVal = [value1,value2, value3, value4].join('');
    // console.log(value1, value2, value3, value4);
    console.log(otpVal);
    
}
useEffect(()=>{
    getData();
})

useEffect(()=>{
    getValue();
    setClicked(false);
},[clicked])

return (
    <div className="container">
    <header>
        <i className="bx bxs-check-shield"></i>
    </header>
    <h4>Enter OTP Code</h4>
    <form action="#">
    {/* <input type="number" id="number"/> */}
        <div className="input-field">
        <input id="1" type="number" />
        <input id="2" type="number" disabled />
        <input id="3" type="number" disabled />
        <input id="4" type="number" disabled />
        </div>
        <button onClick={()=>setClicked(true)}>Verify OTP</button>
    </form>
    </div>
);
}

export default App;
