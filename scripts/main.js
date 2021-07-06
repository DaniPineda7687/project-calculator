const buttons = document.querySelectorAll(".printable");
const buttonsOperations = document.querySelectorAll(".operations");
const currentOperation = document.querySelector(".current-operation");
const recentOperation = document.querySelector(".recent-operation");
const resetButton = document.querySelector(".reset");

let num1,num2,result,operatorJoined;
let capture=false;
let pointExist=false;

resetButton.addEventListener("click",()=>{
    num1=0;
    num2=0;
    result=0
    operatorJoined="";
    capture=false;
    currentOperation.textContent="";
    recentOperation.textContent="";
});


buttons.forEach(button=>button.addEventListener("click",(e)=>{
    currentOperation.textContent+=e.target.value;
}));

buttonsOperations.forEach(button=>button.addEventListener("click",(e)=>{
    if(capture==false){
        num1=parseFloat(currentOperation.textContent);
        recentOperation.textContent=currentOperation.textContent;
        currentOperation.textContent="";
        operatorJoined=e.target.value;
        capture=true;
    }else{
        num2=parseFloat(currentOperation.textContent);
        result = operate(num1,num2,operatorJoined);
        num1=Math.round(result * 100) / 100;
        operatorJoined=e.target.value;
        recentOperation.textContent=num1+e.target.value;
        currentOperation.textContent="";
    }
}));


function add(num1,num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}
function power(num1,num2){
    return Math.pow(num1,num2);
}
function percentage(num1,num2){
    return ((num1*num2)/100);
}
function changeSign(num1){
    return num1*-1;
}

function total(){
    currentOperation.textContent=result;
    recentOperation.textContent="";
}

function operate(num1,num2,operator){

    switch(operator){
        case "+":
            return add(num1,num2);
        case "-":
            return subtract(num1,num2);
        case "*":
            return multiply(num1,num2);
        case "/":
            return divide(num1,num2);
        case "^":
            return power(num1,num2);
        case "%":
            return percentage(num1,num2);
        case "+/-":
            return changeSign(num1);
        case "=":
            return total();
    }
}

















/*function subtract(num1,num2){
    return num1-num2;
}
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){
    return num1/num2;
}*/


/*
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
}*/