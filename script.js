let display = document.getElementById('display');
let currentInput = '';

// Function to append numbers to the display
function appendNumber(number) {
    currentInput += number;
    display.value = currentInput;
}

// Function to append operators to the display
function appendOperator(operator) {
    currentInput += ' ' + operator + ' ';
    display.value = currentInput;
}

// Function to clear the display
function clearDisplay() {
    currentInput = '';
    display.value = '';
}

// Function to calculate the result
function calculateResult() {
    try {
        // Evaluate the expression and show the result
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
    } catch (e) {
        // If there is an error (invalid expression), show "Error"
        display.value = 'Error';
        currentInput = '';
    }
}
