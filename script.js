//var
const screen = document.querySelector(".screen");
const opButtons = document.querySelectorAll(".opration");
const numButtons = document.querySelectorAll(".num");
const eq = document.querySelector(".eq");
const acButton = document.querySelector("#clear");
const history = document.querySelector(".history");
const point = document.querySelector(".point");
const plusminus = document.querySelector(".plusminus");

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
    if(screen.textContent === 0)
        x = event.target.textContent;
    else
        x += event.target.textContent;
    console.log(x);
    screen.textContent = x;

    opButtons.forEach((button) => {
        button.addEventListener("click", opClicked);
    });

    point.addEventListener("click", pointClickedX);
    plusminus.addEventListener("click", plusminusClickedX);


}

//ALL of this is for testing purposes, will refactor the funX, funY stuff later.

function plusminusClickedX() {
    x = x*-1;
    console.log(x);
    screen.textContent = x;
}
function opClicked (event) {
    plusminus.removeEventListener("click", plusminusClickedX);
    if(y) {
        x = operate();
        screen.textContent = `${x}${op}`;
        y = "";
    }
    numButtons.forEach((button) => {
        button.removeEventListener("click", numClickedX);
    });
    
    op = event.target.textContent;
    console.log(op);
    screen.textContent = `${x}${op}`;

    numButtons.forEach((button) => {
        button.addEventListener("click", numClickedY);
    });
}


function numClickedY(event) {
    y += event.target.textContent;
    console.log(y);
    screen.textContent = `${x}${op}${y}`;

    point.addEventListener("click", pointClickedY);
    plusminus.addEventListener("click", plusminusClickedY);

}

function plusminusClickedY() {
    y = y*-1;
    console.log(x);
    screen.textContent = `${x}${op}${y}`;
}
function pointClickedX(event) {
    x += ".";
    console.log(x);
    screen.textContent = x;

    point.removeEventListener("click", pointClickedX);
}
function pointClickedY(event) {
    y += ".";
    console.log(y);
    screen.textContent = `${x}${op}${y}`;

    point.removeEventListener("click", pointClickedX);
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
    point.removeEventListener("click", pointClickedX);
    point.removeEventListener("click", pointClickedY);
    plusminus.addEventListener("click", plusminusClickedX);
    plusminus.addEventListener("click", plusminusClickedY);

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
        if(y === 0)
            res = "Really? LOL";
        else
            res = divide(x, y);
    }
    else if(op === "%"){
        //mod implemention TBA.
    }
    if(x && op &&(y || y === 0))
        history.textContent += `${x}${op}${y} = ${res}, `;
    console.log(res)
    console.log(screen.textContent)
    x = res;
    op = ""
    if(y === 0){
        x = "";
        opButtons.forEach((button) => {
            button.removeEventListener("click", opClicked);
        });
        numButtons.forEach((button) => {
            button.removeEventListener("click", numClickedY);
        });
        numButtons.forEach((button) => {
            button.addEventListener("click", numClickedX);
        });
    }
    y = ""
    screen.textContent = res;
    console.log(screen.textContent)

    plusminus.removeEventListener("click", plusminusClickedY);
    plusminus.addEventListener("click", plusminusClickedX);

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