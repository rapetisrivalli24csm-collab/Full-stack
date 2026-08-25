const fs = require("fs");

fs.readFile("student.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error:", err);
        return;
    }

    console.log("File Content:");
    console.log(data);
});