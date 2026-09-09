// Experiment 5: Implement Modules in NodeJS

// Import the user-defined mathematical module
const math = require("./mathModule5");

// Input values
const firstNumber = 20;
const secondNumber = 5;

// Display the results
console.log("----- NodeJS Module Demonstration -----");

console.log("First Number  :", firstNumber);
console.log("Second Number :", secondNumber);

console.log("Addition       :", math.add(firstNumber, secondNumber));
console.log("Subtraction    :", math.subtract(firstNumber, secondNumber));
console.log("Multiplication :", math.multiply(firstNumber, secondNumber));
console.log("Division       :", math.divide(firstNumber, secondNumber));