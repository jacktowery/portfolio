let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let outputField = document.querySelector("#output");

let addButton = document.querySelector("#addButton");
let subButton = document.querySelector("#subButton");
let mulButton = document.querySelector("#mulButton");
let divButton = document.querySelector("#divButton");

function add() {
    let sum = Number(input1.value) + Number(input2.value);
    outputField.value = "$" + sum;
}
function subtract() {
    let sum = Number(input1.value) - Number(input2.value);
    outputField.value = "$" + sum;
}
function multiply() {
    let sum = Number(input1.value) * Number(input2.value);
    outputField.value = "$" + sum;
}
function divide() {
    let sum = Number(input1.value) / Number(input2.value);
    outputField.value = "$" + sum;
}

addButton.onclick = function() {
    add();
}
subButton.onclick = () => subtract();
mulButton.onclick = () => multiply();
divButton.onclick = () => divide();