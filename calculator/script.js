
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons-grid button');

let currentInput = '0';
let firstOperand = null;
let operator = null;
let waitingForSecondOperand = false;


function updateDisplay() {
    display.value = currentInput;
}

// Logic: Function to handle number and decimal input
function inputDigit(digit) {
    if (waitingForSecondOperand === true) {
        currentInput = digit;
        waitingForSecondOperand = false;
    } else { // ana still f el rakam nafso
        // msh 3ayza kaza decimal
        if (digit === '.' && currentInput.includes('.')) {
            return;
        }
        // Replace '0' unless the input is '.'
        if (currentInput === '0' && digit !== '.') {
            currentInput = digit;
        } else {
            currentInput += digit;
        }
    }
    updateDisplay();
}

// bazabat transitions 
function handleOperator(nextOperator) {
    const inputValue = parseFloat(currentInput);

    if (firstOperand === null) {
        firstOperand = inputValue;
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator);
        currentInput = String(result);
        firstOperand = result;
    }

    waitingForSecondOperand = true;
    operator = nextOperator;
    updateDisplay();
}

// Logic: Function to perform calculation
function calculate(num1, num2, op) {
    switch (op) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        case '%':
            return num1 * (num2 / 100);
        default:
            return num2;
    }
}

// Logic: Function to reset the calculator
function resetCalculator() {
    currentInput = '0';
    firstOperand = null;
    operator = null;
    waitingForSecondOperand = false;
    updateDisplay();
}

// Event: Add event listener to all buttons for delegation
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const target = event.target;
        const value = target.dataset.value;
        const action = target.dataset.action;
        const op = target.dataset.op;

        // Prioritize actions and operators over digits
        if (action === 'clear') {
            resetCalculator();
            return;
        }

        if (action === 'calculate') {
            if (firstOperand !== null && operator !== null && !waitingForSecondOperand) {
                handleOperator('='); // Trigger calculation
            }
            return;
        }

        if (op) {
            handleOperator(op);
            return;
        }

        if (value) {
            inputDigit(value);
            return;
        }

    });
});