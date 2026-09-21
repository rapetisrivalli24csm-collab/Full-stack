const fs = require("fs");

fs.appendFile("student.txt", "\nWelcome to Node.js File Operations", (err) => {
    if (err) {
        console.log("Error:", err);
        return;
    }

    console.log("Data appended successfully");
});