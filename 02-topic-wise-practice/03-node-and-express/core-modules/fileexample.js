const fs = require("fs");

fs.writeFileSync("message.txt", "Hello from Node.js!");

console.log("File created successfully!");


fs.writeFileSync(
    "student.txt",
    "Name: Srivalli\nCourse: BCA\nYear: 1st Year"
);

console.log("Student file created successfully!");

const data = fs.readFileSync("student.txt");

console.log(data);

const withutf = fs.readFileSync("student.txt","utf8");

console.log(withutf);
