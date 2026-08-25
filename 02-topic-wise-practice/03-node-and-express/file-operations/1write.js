const fs = require("fs");

fs.writeFile("student.txt", "Hello Srivalli!", (err) => {
    if (err) throw err;
    console.log("File created successfully");
});