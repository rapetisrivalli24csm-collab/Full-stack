// Experiment 5: Implement Modules in NodeJS
// User-defined module for mathematical operations

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }

    return a / b;
}

// Export the functions so they can be used in another file
module.exports = {
    add,
    subtract,
    multiply,
    divide
};