const digitsContainer = document.querySelectorAll('.calculate__digits');
const tableContainer = document.querySelector('table');
const result = document.querySelector('#result');
let numArr = [];
let opr = null;
let answer = null;
let num1 = null;
let num2 = null;

function reset(){
    numArr = [];
    opr = null;
    num1 = null;
    num2 = null;
}

function checkDigits(){    
    if(!opr){
        num1 = Number(numArr.join(""));
        console.log("num1: ", num1);
        return;
    } else {
        num2 = Number(numArr.join(""));
        console.log("num2: ",num2);
        return;
    }
}

function calculate(num1, num2, opr){
    switch(opr){
        case '+':
            answer=num1+num2;
            break;
        case '-':
            answer=num1-num2;
            break;
        case '/':
            answer=Math.floor(num1/num2);
            break;
        case '*':
            answer=num1*num2;
            break;
    }
    reset();
    done++;
    return console.log(result.innerHTML = answer);
}

function paintDigits(num){
    switch(num){
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
        case "0":
            numArr.push(num);            
            result.innerHTML += num;
            checkDigits();
            break;
        case "+":
        case "-":
        case "/":
        case "*":
            opr = num;
            numArr = [];
            result.innerHTML += num;
            checkDigits();
            break;
        case "=":
            calculate(num1, num2, opr);
            break;
        case "C":
            numArr = [];
            opr = null;
            result.innerHTML = "";
            break;
    }
}

function clickHandler(e){
    let data = e.target.firstChild.data;
    paintDigits(data);
}

function init (){
    tableContainer.addEventListener('click', clickHandler);
}

init();