const keys = document.getElementsByClassName("key");
const clearDisplay = document.getElementById("clearDisplay");
let op = "-";

let num1 = 0;
let num2 = 0;
let isOrder = true;
let operator = "";
let result;

const display = document.getElementById("display");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return b - a;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function operate(num1, num2, op) {
  if (op == "+") return add(num1, num2);
  if (op == "-") return subtract(num1, num2);
  if (op == "*") return multiply(num1, num2);
  if (op == "/") return divide(num1, num2);
}
Array.from(keys).forEach((element) => {
  element.addEventListener("click", (event) => {
    if (element.innerHTML != "=") {
      let num = Number(element.innerHTML);
      console.log(num);
      if (!Object.is(num, NaN) && operator != "") {
        num2 = num2 * 10 + num;
        display.innerHTML += element.innerHTML;
      }
      if (!Object.is(num, NaN) && operator == "") {
        num1 = num1 * 10 + num;
        display.innerHTML += element.innerHTML;
      } else if (Object.is(num, NaN) && operator == "") {
        operator = element.innerHTML;
        display.innerHTML += operator;
      }
    } else {
        result = operate(num1, num2, operator);
        console.log(result);
        display.innerHTML = Math.floor(result);
        num1 = result;
        num2 = 0;
        operator = "";
    }
    console.log(num1, num2, operator);
  });
});
clearDisplay.addEventListener("click", (event) => {
    display.innerHTML = "";
    operator = "";
    num1 = "";
    num2 = "";
})
console.log(operate(num1, num2, operator));
