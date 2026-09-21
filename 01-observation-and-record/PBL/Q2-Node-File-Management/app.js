// Q2 - Node.js File Management
// Demonstrates create/write, read, append and display operations
// using Node.js built-in File System (fs) module.

const fs = require("fs");
const readline = require("readline");

// Create a readline interface for terminal input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to ask questions from the user
function askQuestion(question) {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

// Main function
async function fileManagement() {

    console.log("\n======================================");
    console.log("       NODE.JS FILE MANAGEMENT");
    console.log("======================================\n");

    try {

        // Accept filename from the user
        let fileName = await askQuestion(
            "Enter the file name (example: notes.txt): "
        );

        // Accept initial content
        let initialContent = await askQuestion(
            "Enter the content to write: "
        );

        // Validate filename
        if (fileName.trim() === "") {
            console.log("\nError: File name cannot be empty.");
            rl.close();
            return;
        }

        // Add .txt extension if the user did not provide one
        if (!fileName.includes(".")) {
            fileName = fileName + ".txt";
        }

        // -----------------------------------------
        // 1. CREATE / WRITE FILE
        // -----------------------------------------

        fs.writeFileSync(fileName, initialContent);

        console.log("\n✓ File created and content written successfully.");

        // -----------------------------------------
        // 2. READ FILE
        // -----------------------------------------

        const originalContent = fs.readFileSync(
            fileName,
            "utf8"
        );

        console.log("\n----- CONTENT AFTER WRITE -----");
        console.log(originalContent);

        // -----------------------------------------
        // 3. APPEND CONTENT
        // -----------------------------------------

        const additionalContent = await askQuestion(
            "\nEnter additional content to append: "
        );

        fs.appendFileSync(
            fileName,
            "\n" + additionalContent
        );

        console.log("\n✓ Additional content appended successfully.");

        // -----------------------------------------
        // 4. READ FINAL CONTENT
        // -----------------------------------------

        const finalContent = fs.readFileSync(
            fileName,
            "utf8"
        );

        // -----------------------------------------
        // 5. DISPLAY FINAL CONTENT
        // -----------------------------------------

        console.log("\n======================================");
        console.log("          FINAL FILE CONTENT");
        console.log("======================================");
        console.log(finalContent);
        console.log("======================================\n");

    } catch (error) {

        console.log("\nError while performing file operation:");
        console.log(error.message);

    } finally {

        // Close the readline interface
        rl.close();
    }
}

// Start the program
fileManagement();