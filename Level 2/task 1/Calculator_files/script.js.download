let displayValue = "";

function appendValue(value) {
    displayValue += value;
    updateDisplay();
}

function appendOperator(operator) {
    // Avoid adding multiple operators in a row
    if (displayValue && !isNaN(displayValue[displayValue.length - 1])) {
        displayValue += operator;
        updateDisplay();
    }
}

function clearDisplay() {
    displayValue = "";
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("display").value = displayValue;
}

function calculate() {
    try {
        // Use eval to calculate the expression
        displayValue = eval(displayValue).toString();
        updateDisplay();
    } catch (error) {
        displayValue = "Error";
        updateDisplay();
        setTimeout(clearDisplay, 1000); // Clear after 1 second
    }
}
