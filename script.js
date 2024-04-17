// let firstNum = prompt('enter first num ');
// let secNum = prompt('enter second num ');
// let operator = prompt(' + , - , * , /');

function add(firstNum, secNum){
    console.log(Number(firstNum) + Number(secNum));
}

function subtract(firstNum, secNum){
    return firstNum - secNum;
}

function multiply(firstNum, secNum){
    return firstNum * secNum;
}

function divide(firstNum, secNum){
    return firstNum / secNum;
}

function operate(firstNum , secNum , operator){
    if(operator === '+'){
        add(firstNum, secNum);
    } else if(operator === '-'){
        subtract(firstNum, secNum);
    } else if(operator === '*'){
        multiply(firstNum, secNum); 
    } else{
        divide(firstNum, secNum);
    }
}

operate(firstNum,secNum,operator);

