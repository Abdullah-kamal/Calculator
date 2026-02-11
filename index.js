
let num1 = 5;
let num2 = 6;
let op = "/";

function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return a / b;
}

function operate(num1, num2, op){
    if(op == "+") return add(num1, num2);
    if(op == "-") return subtract(num1, num2);
    if(op == "*") return multiply(num1, num2);
    if(op == "/") return divide(num1, num2);
}

let ans = operate(num1, num2, op);

console.log(ans);
