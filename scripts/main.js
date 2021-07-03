const buttons = document.querySelectorAll(".buttons");
const buttonsOperations = document.querySelectorAll(".operations");
const currentOperation = document.querySelector(".current-operation");
const recentOperation = document.querySelector(".recent-operation");

let num1,num2,operator,nums;

buttons.forEach(button=>button.addEventListener("click",(e)=>{
    currentOperation.textContent+=e.target.value;
}));

buttonsOperations.forEach(button=>button.addEventListener("click",(e)=>{
    
    
}));

function add(num1,num2){
    let result=num1+num2;
    console.log(num1+num2);
    return result;
}
function subtract(num1,num2){
    console.log(num1-num2);
    return num1-num2;
}
function multiply(num1,num2){
    console.log(num1*num2);
    return num1*num2;
}
function divide(num1,num2){
    console.log(num1/num2);
    return num1/num2;
}

function operate(num1,num2,operator){

    switch(operator){
        case "+":
            console.log("suma");
            add(num1,num2);
            break;
        case "-":
            console.log("resta");
            subtract(num1,num2);
            break;
        case "*":
            console.log("multiplicar");
            multiply(num1,num2);
            break;
        case "/":
            console.log("dividir");
            divide(num1,num2);
            break;
    }
}