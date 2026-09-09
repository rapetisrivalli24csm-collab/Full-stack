const math = require("./math");
const student = require("./student");

console.log("Addition:", math.add(20, 10));
console.log("Subtraction:", math.subtract(20, 10));
console.log("Multiplication:", math.multiply(20, 10));
console.log("Division:", math.divide(20, 10));


console.log("Student Name:", student.getName());
console.log("Course:", student.getCourse());

