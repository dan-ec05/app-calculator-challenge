import { mainCalc } from "./calculator.js";

let screenValue = "";
let values = [];
let numbers = "";

const initEngines = () => {
    getButtons();
    setScreen(screenValue);
};

function setScreen(value){
    if (value == "DEL"){
        screenValue = screenValue.substring(0, screenValue.length - 1);
    }
    else{
        screenValue = value;
    }
    const scrResult = document.getElementById("result");
    scrResult.innerHTML = screenValue;
}

function getButtons(){
    let buttons = document.getElementsByClassName("math-btn");
    for(const btn of buttons) setButtons("math-btn", btn);

    let opButtons = document.getElementsByClassName("op-btn");
    for(const btn of opButtons) setButtons("op-btn", btn);

    let calcButton = document.getElementById("calc");
    setButtons("calc-btn", calcButton);
}

function setButtons(btnClass, btn){
    if (btnClass == "math-btn"){
        btn.addEventListener('click', function (){
            if (isNaN(btn.innerHTML)){
                if (numbers.length) {
                    values.push(numbers);
                    numbers = "";
                }
                values.push(btn.innerHTML);
            }
            else{
                numbers += btn.innerHTML;
            }
            screenValue += btn.innerHTML;
            setScreen(screenValue);

            const screen = document.getElementById("result");
            screen.scrollLeft = screen.scrollWidth;
        });
        return;
    }
    if(btnClass == "op-btn"){
        btn.addEventListener('click', function (){
            if (btn.innerHTML == "DEL") {
                setScreen("DEL"); 
                return;
            }
            if (btn.innerHTML == "RESET") {
                numbers = "";
                values = [];
                setScreen(""); 
                return;
            }
        });
    }
    if (btnClass == "calc-btn"){
        btn.addEventListener("click", function (){
            calculateResult();
        });
    }
}

function calculateResult(){
    if(numbers.length) values.push(numbers);
    let result = mainCalc(values);

    setScreen(result);
}

initEngines();