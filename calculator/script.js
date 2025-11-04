const display = document.getElementById('display');
const buttons = document.querySelectorAll('.buttons-grid button');

let currentInput = '0';

function updateDisplay() {
    display.value = currentInput;
}

function inputDigit(digit) {
    if (currentInput === '0' && digit !== '.') {
        currentInput = digit;
    } else {
        currentInput += digit;
    }
    updateDisplay();
}

function handleOperator(nextOperator) {
    currentInput += nextOperator;
    updateDisplay();
}

function resetCalculator() {
    currentInput = '0';
    updateDisplay();
}

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const target = event.target;
        const value = target.dataset.value;
        const action = target.dataset.action;
        const op = target.dataset.op;

        if (action === 'clear') {
            resetCalculator();
            return;
        }

        if (action === 'calculate') {
            try {
                currentInput = String(eval(currentInput));
                updateDisplay();
            } catch {
                currentInput = "Error";
                updateDisplay();
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
