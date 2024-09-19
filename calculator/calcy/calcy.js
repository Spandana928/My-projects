const display = document.getElementById('display');
let currentInput = '0';
let operator = null;
let firstOperand = null;
let waitingForSecondOperand = false;

document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const value = button.textContent;

        if (parseFloat(value) || value === '0') {
            handleNumber(value);
        } else {
            handleOperator(value);
        }

        updateDisplay();
    });
});

function handleNumber(num) {
    if (waitingForSecondOperand) {
        currentInput = num;
        waitingForSecondOperand = false;
    } else {
        currentInput = currentInput === '0' ? num : currentInput + num;
    }
}

function handleOperator(op) {
    switch (op) {
        case '+':
        case '-':
        case 'x':
        case '÷':
            if (operator && waitingForSecondOperand) {
                operator = op;
                return;
            }

            if (firstOperand === null) {
                firstOperand = parseFloat(currentInput);
            } else if (operator) {
                const result = operate(firstOperand, parseFloat(currentInput), operator);
                currentInput = String(result);
                firstOperand = result;
            }

            operator = op;
            waitingForSecondOperand = true;
            break;

        case '=':
            if (operator && !waitingForSecondOperand) {
                currentInput = String(operate(firstOperand, parseFloat(currentInput), operator));
                operator = null;
                firstOperand = null;
                waitingForSecondOperand = false;
            }
            break;

        case 'C':
            currentInput = '0';
            operator = null;
            firstOperand = null;
            waitingForSecondOperand = false;
            break;

        // Add more cases for other operators and functions (%, √, etc.)
    }
}

function operate(first, second, op) {
    switch (op) {
        case '+': return first + second;
        case '-': return first - second;
        case 'x': return first * second;
        case '÷': return first / second;
        default: return second;
    }
}

function updateDisplay() {
    display.textContent = currentInput;
}
