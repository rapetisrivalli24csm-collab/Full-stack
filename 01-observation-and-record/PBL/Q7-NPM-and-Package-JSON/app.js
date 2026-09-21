// Q7 - NPM and package.json
// Demonstrates installing and using an external NPM package.

// Import the external Chalk package
const chalk = require("chalk");

console.log("\n======================================");
console.log("        NPM AND PACKAGE.JSON");
console.log("======================================");

// Display different messages using Chalk
console.log(chalk.blue("\nNPM Demonstration"));
console.log(chalk.green("✓ External package installed successfully."));
console.log(chalk.yellow("✓ Package name: chalk"));
console.log(chalk.cyan("✓ Chalk is being used to style terminal output."));

console.log("\n========== PACKAGE INFORMATION ==========");

console.log("Package Manager: NPM");
console.log("External Package: Chalk");
console.log("Main File: app.js");
console.log("Configuration File: package.json");

console.log("\n========== NPM CONCEPTS ==========");

console.log(chalk.magenta("NPM → Node Package Manager"));
console.log(chalk.magenta("package.json → Stores project information and dependencies."));
console.log(chalk.magenta("npm install → Installs required packages."));
console.log(chalk.magenta("node_modules → Stores installed packages."));

console.log("\n======================================");
console.log(chalk.green("       PROGRAM COMPLETED"));
console.log("======================================\n");