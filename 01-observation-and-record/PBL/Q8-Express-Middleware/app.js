// Q8 - Express Middleware
// Demonstrates middleware and the request-response cycle.

const express = require("express");

const app = express();
const PORT = 3000;

// --------------------------------------------------
// Logging Middleware
// --------------------------------------------------

function requestLogger(req, res, next) {
    const currentTime = new Date().toLocaleTimeString();

    console.log(
        `[${currentTime}] ${req.method} request received for ${req.url}`
    );

    // Pass control to the next middleware/route
    next();
}

// Register the logging middleware
app.use(requestLogger);

// Built-in middleware to read JSON request data
app.use(express.json());

// --------------------------------------------------
// Routes
// --------------------------------------------------

app.get("/", (req, res) => {
    res.send(`
        <h1>Express Middleware Demo</h1>
        <p>Welcome to the Express Middleware application.</p>
        <p>The request was recorded by the logging middleware.</p>
    `);
});

app.get("/students", (req, res) => {
    res.json({
        success: true,
        message: "Student information retrieved successfully.",
        students: [
            {
                id: 1,
                name: "Srivalli",
                course: "CSE"
            },
            {
                id: 2,
                name: "Ananya",
                course: "CSE"
            },
            {
                id: 3,
                name: "Rahul",
                course: "CSE"
            }
        ]
    });
});

app.get("/about", (req, res) => {
    res.json({
        project: "Express Middleware Demonstration",
        technology: "Node.js and Express.js",
        purpose: "Demonstrating middleware and request-response cycle"
    });
});

// --------------------------------------------------
// 404 Route
// --------------------------------------------------

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found."
    });
});

// --------------------------------------------------
// Start Server
// --------------------------------------------------

app.listen(PORT, () => {
    console.log("======================================");
    console.log("       EXPRESS MIDDLEWARE SERVER");
    console.log("======================================");
    console.log(`Server running at http://localhost:${PORT}`);
    console.log("");
    console.log("Available routes:");
    console.log(`GET http://localhost:${PORT}/`);
    console.log(`GET http://localhost:${PORT}/students`);
    console.log(`GET http://localhost:${PORT}/about`);
    console.log("");
    console.log("Logging middleware is active.");
    console.log("======================================");
});