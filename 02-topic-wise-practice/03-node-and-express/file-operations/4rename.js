const fs = require("fs");

fs.rename("student.txt", "student_data.txt", (err) => {
    if (err) {
        console.log("Error:", err);
        return;
    }

    console.log("File renamed successfully");
});