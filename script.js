const operatorButtons = document.querySelectorAll('[data-operator]');
const numberButtons = document.querySelectorAll('[data-number]');
const equalButton = document.querySelector('[data-equals]');
const clearButton = document.querySelector('[data-all-clear]');
const bigDisplay = document.querySelector('[data-big-display]');
const smallDisplay = document.querySelector('[data-small-display]')

function updateDisplay() {

}
function clearDisplay(){
    bigDisplay.textContent = '';
    smallDisplay.textContent = '';
}
clearButton.addEventListener('click', () => {
    clearDisplay();
})

numberButtons.forEach(button => button.addEventListener ('click', () => {
    let buttonText = button.innerText;
    bigDisplay.textContent += buttonText;
}))

operatorButtons.forEach(button => button.addEventListener('click', () => {
    let operatorText = button.innerText;
    bigDisplay.textContent = operatorText;
    smallDisplay = buttonText; //continue form here
}))

equalButton.addEventListener('click', () => {

})

function calculatation(){
     
}

// let firstNum = prompt('enter first num ');
// let secNum = prompt('enter second num ');
// let operator = prompt(' + , - , * , /');

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

function operate(firstNum , secondNum , operator){
    let result = 0;
    let operationResult = 0;
    switch(operator){
        case '+':
            operationResult = add(firstNum,secondNum);
            result += operationResult;
            break;
        case '-':
            operationResult = subtract(firstNum,secondNum);
            result += operationResult;
            break;
        case '*':
            operationResult = multiply(firstNum,secondNum);
            result += operationResult;
            break;
        case '/':
            operationResult = divdie(firstNum,secondNum);
            result += operationResult;
            break;

    } return result;

}



