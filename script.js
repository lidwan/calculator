//core functions

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x, y){
    return x / y;
}

let x, op, y;

function operate(x, op, y) {
    if(op === "+")
        return add(x, y);
    else if(op === "-")
        return subtract(x, y);
    else if(op === "*")
        return multiply(x, y);
    else if(op === "/")
        return divide(x, y);
}

let calc =[];
const screen = document.querySelector(".screen");

function opClicked(event) {
    op = event.target.textContent;
}

function numClicked(event) {
    num = event.target.textContent;
}

function start() {
const opButtons = document.querySelectorAll(".opration");
opButtons.forEach((button) => {
    button.addEventListener("click", opClicked);
})

const numButtons = document.querySelectorAll(".num");
numButtons.forEach((button) => {
    button.addEventListener("click", hola);
})

const eq = document.querySelector(".eq");
eq.addEventListener("click", operate(x, op, y));

}

window.addEventListener("load", start);
