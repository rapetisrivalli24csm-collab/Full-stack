const fs = require("fs");

if (fs.existsSync("student_data.txt")) {
    console.log("File exists");
} else {
    console.log("File does not exist");
}