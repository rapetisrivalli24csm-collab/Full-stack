// Q3 - Express.js Student Server
// Demonstrates routing, HTTP methods and JSON responses.

const express = require("express");

const app = express();

const PORT = 3000;

// Middleware to read JSON request data
app.use(express.json());

// Student data
const students = [
    {
        id: 1,
        name: "Srivalli",
        course: "CSE",
        year: 3
    },
    {
        id: 2,
        name: "Ananya",
        course: "CSE",
        year: 3
    },
    {
        id: 3,
        name: "Rahul",
        course: "CSE",
        year: 3
    },
    {
        id: 4,
        name: "Sneha",
        course: "CSE",
        year: 3
    },
    {
        id: 5,
        name: "Kiran",
        course: "CSE",
        year: 3
    }
];

// --------------------------------------
// GET /
// --------------------------------------

app.get("/", (req, res) => {
    res.send(`
        <h1>Student Information Server</h1>
        <p>Welcome to the Express.js Student Server.</p>
        <p>Available routes:</p>
        <ul>
            <li>GET /</li>
            <li>GET /students</li>
            <li>GET /about</li>
        </ul>
    `);
});

// --------------------------------------
// GET /students
// --------------------------------------

app.get("/students", (req, res) => {
    res.json({
        success: true,
        count: students.length,
        students: students
    });
});

// --------------------------------------
// GET /about
// --------------------------------------

app.get("/about", (req, res) => {
    res.json({
        project: "Student Information Server",
        technology: "Node.js and Express.js",
        purpose: "Demonstration of Express routing and HTTP methods",
        totalStudents: students.length
    });
});

// --------------------------------------
// POST /students
// --------------------------------------

app.post("/students", (req, res) => {

    const { name, course, year } = req.body;

    if (!name || !course || !year) {
        return res.status(400).json({
            success: false,
            message: "Name, course and year are required."
        });
    }

    const newStudent = {
        id: students.length + 1,
        name: name,
        course: course,
        year: year
    };

    students.push(newStudent);

    res.status(201).json({
        success: true,
        message: "Student added successfully.",
        student: newStudent
    });
});

// --------------------------------------
// Start server
// --------------------------------------

app.listen(PORT, () => {
    console.log("--------------------------------------");
    console.log("   STUDENT SERVER STARTED");
    console.log("--------------------------------------");
    console.log(`Server running at http://localhost:${PORT}`);
    console.log("");
    console.log("Available routes:");
    console.log(`GET  http://localhost:${PORT}/`);
    console.log(`GET  http://localhost:${PORT}/students`);
    console.log(`GET  http://localhost:${PORT}/about`);
    console.log(`POST http://localhost:${PORT}/students`);
});