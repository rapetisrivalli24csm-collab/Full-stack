// Experiment 3: JavaScript Program using Arrays and Functions
// Student: R. Srivalli

// Array containing marks of students
let marks = [78, 85, 92, 67, 88];

// Function to calculate the total marks
function calculateTotal(values) {
    let total = 0;

    for (let mark of values) {
        total += mark;
    }

    return total;
}

// Function to calculate the average marks
function calculateAverage(values) {
    return calculateTotal(values) / values.length;
}

// Function to find the highest mark
function findHighest(values) {
    return Math.max(...values);
}

// Function to find the lowest mark
function findLowest(values) {
    return Math.min(...values);
}

// Function to display the results
function displayResult() {
    console.log("----- Student Marks Analysis -----");
    console.log("Marks:", marks);
    console.log("Total Marks:", calculateTotal(marks));
    console.log("Average Marks:", calculateAverage(marks).toFixed(2));
    console.log("Highest Mark:", findHighest(marks));
    console.log("Lowest Mark:", findLowest(marks));
}

// Calling the function
displayResult();