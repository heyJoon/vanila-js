let num1 = Number(prompt("숫자를 입력해주세요", "ex)1"));
let opr = prompt("연산자를 입력해주세요", "ex)+");
let num2 = Number(prompt("숫자를 입력해주세요", "ex)5"));

function calculate (num1, num2, opr){
    switch(opr){
        case '+':
            return num1+num2;
        case '-':
            return num1-num2;
        case '/':
            return Math.floor(num1/num2);
        case '*':
            return num1*num2;
    }
}

console.log(calculate(num1, num2, opr));