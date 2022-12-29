import React, { useEffect } from "react";
import './Form.css';

function App() {
    
    const getData = ()=>{
        let inputs = document.querySelectorAll("input");
        let button = document.querySelector("button");
        console.log(button, inputs);
        
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
                            // input.value = "";
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
        // const inputValue = document.getElementById(1).value;
        // // const value1 = inputs[0];
        // // const value2 = inputs[1];
        // // const value3 = inputs[2];
        // // const value4 = inputs[3];
        // // console.log(value1, value2, value3, value4);
        // button.addEventListener("click", () => console.log(inputValue));
    };
//    const getValue = () => {
//     

//    } 
useEffect(()=>{
    getData();
})

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
        <button>Verify OTP</button>
    </form>
    </div>
);
}

export default App;
