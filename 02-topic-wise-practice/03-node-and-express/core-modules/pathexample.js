const path = require("path");

// Create a file path
const filePath = path.join(
    __dirname,
    "documents",
    "student.txt"
);

// Display the complete path
console.log("Complete Path:", filePath);

// Get only the file name
console.log("File Name:", path.basename(filePath));

// Get the file extension
console.log("File Extension:", path.extname(filePath));

// Get only the directory
console.log("Directory:", path.dirname(filePath));