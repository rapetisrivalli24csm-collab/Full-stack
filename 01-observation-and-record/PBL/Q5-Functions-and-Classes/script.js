// Q5 - JavaScript Functions and Classes
// Demonstrates the difference between functions and classes
// and shows how one class can create multiple objects.

// --------------------------------------------------
// PART 1: FUNCTION
// --------------------------------------------------

// A function is a reusable block of code.
// It can receive values and return a result.

function calculateTotal(marks1, marks2, marks3) {

    const total = marks1 + marks2 + marks3;

    return total;
}

// Calling the function
const totalMarks = calculateTotal(85, 90, 88);

console.log("========== FUNCTION DEMONSTRATION ==========");
console.log("Total Marks:", totalMarks);


// --------------------------------------------------
// PART 2: CLASS
// --------------------------------------------------

// A class is a blueprint for creating objects.
// It contains common properties and methods.

class Student {

    // Constructor initializes object properties
    constructor(name, rollNumber, course) {

        this.name = name;
        this.rollNumber = rollNumber;
        this.course = course;
    }

    // Method shared by all Student objects
    introduce() {

        return `I am ${this.name}, Roll No: ${this.rollNumber}, studying ${this.course}.`;
    }

    // Another common method
    displayDetails() {

        console.log("Name:", this.name);
        console.log("Roll Number:", this.rollNumber);
        console.log("Course:", this.course);
    }
}


// --------------------------------------------------
// PART 3: CREATE MULTIPLE OBJECTS
// --------------------------------------------------

// Student is the blueprint.
// These are three different objects created from it.

const student1 = new Student(
    "Srivalli",
    "CSM001",
    "Computer Science"
);

const student2 = new Student(
    "Ananya",
    "CSM002",
    "Computer Science"
);

const student3 = new Student(
    "Rahul",
    "CSM003",
    "Computer Science"
);


// --------------------------------------------------
// PART 4: DISPLAY OBJECT INFORMATION
// --------------------------------------------------

console.log("\n========== CLASS DEMONSTRATION ==========");

console.log("\nStudent 1:");
student1.displayDetails();
console.log(student1.introduce());

console.log("\nStudent 2:");
student2.displayDetails();
console.log(student2.introduce());

console.log("\nStudent 3:");
student3.displayDetails();
console.log(student3.introduce());


// --------------------------------------------------
// PART 5: SHOW COMMON METHOD
// --------------------------------------------------

console.log("\n========== COMMON METHOD ==========");

console.log(student1.introduce());
console.log(student2.introduce());
console.log(student3.introduce());


// --------------------------------------------------
// FUNCTION VS CLASS SUMMARY
// --------------------------------------------------

console.log("\n========== FUNCTION VS CLASS ==========");

console.log("Function:");
console.log("- Performs a specific task.");
console.log("- Can accept parameters.");
console.log("- Can return a value.");

console.log("\nClass:");
console.log("- Acts as a blueprint for objects.");
console.log("- Contains properties and methods.");
console.log("- Can create multiple objects with common structure.");