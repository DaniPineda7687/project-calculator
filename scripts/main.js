const buttons = document.querySelectorAll(".printable");
const buttonsOperations = document.querySelectorAll(".operations");
const currentOperation = document.querySelector(".current-operation");
const recentOperation = document.querySelector(".recent-operation");
const resetButton = document.querySelector(".reset");
const pointButton = document.querySelector(".point");
const eraserButton = document.querySelector(".eraser");
const equalButton = document.querySelector(".equal");

let num1=0;
let num2=0;
let result=0;
let operatorJoined="";
let operationText="";
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

pointButton.addEventListener("click",()=>{
    pointExist=true;
    if(pointExist){
        pointButton.disabled=true;
    }
});

eraserButton.addEventListener("click",()=>{
    if(currentOperation.textContent!=""){
        operationText = currentOperation.textContent;
        currentOperation.textContent=operationText.slice(0,operationText.length-1);
    }else{
        console.log("vacio");
    }
});

equalButton.addEventListener("click",()=>{
    total();
});

buttons.forEach(button=>button.addEventListener("click",(e)=>{
    currentOperation.textContent+=e.target.value;
}));

window.addEventListener("keypress",(e)=>{ 
    if((e.charCode>=48&&e.charCode<=57)||(e.charCode==46)){
        currentOperation.textContent+=e.key;
    }
    if((e.charCode>=42&&e.charCode<46)||(e.charCode==47)){
        if(capture==false){
            num1=parseFloat(currentOperation.textContent);
            recentOperation.textContent=currentOperation.textContent+e.key;
            currentOperation.textContent="";
            operatorJoined=e.key;
            capture=true;
            pointExist=false;
            pointButton.disabled=false;
        }else{
            num2=parseFloat(currentOperation.textContent);
            result = operate(num1,num2,operatorJoined);
            num1=Math.round(result * 100) / 100;
            operatorJoined=e.key;
            recentOperation.textContent=num1+operatorJoined;
            currentOperation.textContent="";
            pointExist=false;
            pointButton.disabled=false;
        }
    }
    if(e.charCode==13){
        total();
    }
});

buttonsOperations.forEach(button=>button.addEventListener("click",(e)=>{
    if(capture==false){
        num1=parseFloat(currentOperation.textContent);
        recentOperation.textContent=currentOperation.textContent;
        currentOperation.textContent="";
        operatorJoined=e.target.value;
        capture=true;
        pointExist=false;
        pointButton.disabled=false;
    }else{
        num2=parseFloat(currentOperation.textContent);
        result = operate(num1,num2,operatorJoined);
        num1=Math.round(result * 100) / 100;
        operatorJoined=e.target.value;
        recentOperation.textContent=num1+e.target.value;
        currentOperation.textContent="";
        pointExist=false;
        pointButton.disabled=false;
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
    num2=parseFloat(currentOperation.textContent);
    result = operate(num1,num2,operatorJoined);
    num1=Math.round(result * 100) / 100;
    pointExist=false;
    pointButton.disabled=false;
    capture=false;
    recentOperation.textContent="";
    currentOperation.textContent=num1;
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
    }
}
