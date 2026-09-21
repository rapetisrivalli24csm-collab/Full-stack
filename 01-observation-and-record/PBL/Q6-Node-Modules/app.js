// Q6 - Node.js Built-in Modules
// Demonstrates the os, path and fs modules.

// Import Node.js built-in modules
const os = require("os");
const path = require("path");
const fs = require("fs");

console.log("======================================");
console.log("       NODE.JS BUILT-IN MODULES");
console.log("======================================");

// --------------------------------------------------
// 1. OS MODULE
// --------------------------------------------------

console.log("\n========== OS MODULE ==========");

console.log("Operating System:", os.type());
console.log("Platform:", os.platform());
console.log("Architecture:", os.arch());
console.log("CPU Cores:", os.cpus().length);
console.log("Total Memory:", formatBytes(os.totalmem()));
console.log("Free Memory:", formatBytes(os.freemem()));
console.log("Home Directory:", os.homedir());

// --------------------------------------------------
// 2. PATH MODULE
// --------------------------------------------------

console.log("\n========== PATH MODULE ==========");

const folder = "projects";
const file = "student-record.txt";

const fullPath = path.join(folder, file);

console.log("Folder:", folder);
console.log("File:", file);
console.log("Joined Path:", fullPath);
console.log("File Name:", path.basename(fullPath));
console.log("File Extension:", path.extname(fullPath));
console.log("Directory Name:", path.dirname(fullPath));

// --------------------------------------------------
// 3. FS MODULE
// --------------------------------------------------

console.log("\n========== FS MODULE ==========");

const fileName = "module-demo.txt";
const fileContent =
    "This file was created using the Node.js fs module.";

try {

    // Create and write a file
    fs.writeFileSync(fileName, fileContent);

    console.log("File created successfully:", fileName);

    // Read the file
    const data = fs.readFileSync(fileName, "utf8");

    console.log("File content:", data);

    // Check whether the file exists
    if (fs.existsSync(fileName)) {
        console.log("File exists: Yes");
    }

} catch (error) {

    console.log("File operation error:", error.message);
}

// --------------------------------------------------
// Helper function
// --------------------------------------------------

function formatBytes(bytes) {

    const megabytes = bytes / (1024 * 1024);

    return megabytes.toFixed(2) + " MB";
}

// --------------------------------------------------
// SUMMARY
// --------------------------------------------------

console.log("\n========== MODULE SUMMARY ==========");

console.log("os   → Provides operating system information.");
console.log("path → Helps work with file and directory paths.");
console.log("fs   → Performs file system operations.");

console.log("\n======================================");
console.log("          PROGRAM COMPLETED");
console.log("======================================");