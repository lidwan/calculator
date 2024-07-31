//var
let calc =[];
const screen = document.querySelector(".screen");
const opButtons = document.querySelectorAll(".opration");
const numButtons = document.querySelectorAll(".num");
const eq = document.querySelector(".eq");
const acButton = document.querySelector("#clear");



let x = ""
let op = "";
let y = "";

window.addEventListener("load", start);


function start() {
    numButtons.forEach((button) => {
        button.addEventListener("click", numClickedX);
    });

    eq.addEventListener("click", operate);
    acButton.addEventListener("click", clear);

}


function numClickedX(event) {
    x += event.target.textContent;
    console.log(x);
    screen.textContent = x;

    opButtons.forEach((button) => {
        button.addEventListener("click", opClicked);
    });
}

function opClicked (event) {
    numButtons.forEach((button) => {
        button.removeEventListener("click", numClickedX);
    });

    op = event.target.textContent;
    console.log(op);
    screen.textContent += op;

    opButtons.forEach((button) => {
        button.addEventListener("click", opClicked);
    });

    numButtons.forEach((button) => {
        button.addEventListener("click", numClickedY);
    });
    if(y) {
        x = operate();
        screen.textContent = x;
        y = "";
    }
}


function numClickedY(event) {
    y += event.target.textContent;
    console.log(y);
    screen.textContent += y;
}


function clear() {
    x = ""
    op = "";
    y = "";
    screen.textContent = 0;
    numButtons.forEach((button) => {
        button.addEventListener("click", numClickedX);
    });
    opButtons.forEach((button) => {
        button.removeEventListener("click", opClicked);
    });
    numButtons.forEach((button) => {
        button.removeEventListener("click", numClickedY);
    });
}


function operate() {
    let res = 0;
    x = parseFloat(x);
    y = parseFloat(y);
    if(op === "+") {
        res = add(x, y);
    }
    else if(op === "-"){
        res = subtract(x, y);
    }
    else if(op === "*"){
        res = multiply(x, y);
    }
    else if(op === "/"){
        res = divide(x, y);
    }
    console.log(res)
    console.log(screen.textContent)
    screen.textContent = res;
    console.log(screen.textContent)
    return res;

}


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