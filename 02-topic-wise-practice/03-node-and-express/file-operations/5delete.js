const fs = require("fs");

fs.unlink("student_data.txt", (err) => {
    if (err) {
        console.log("Error:", err);
        return;
    }

    console.log("File deleted successfully");
});