// Creating Student class
class Student {
    constructor(name, rollNumber, department, cgpa) {
        this.name = name;
        this.rollNumber = rollNumber;
        this.department = department;
        this.cgpa = cgpa;
    }
}

// Selecting the button and adding click event
document.getElementById("createBtn").addEventListener("click", function () {

    // Getting values from input fields
    const name = document.getElementById("name").value.trim();
    const rollNumber = document.getElementById("rollNo").value.trim();
    const department = document.getElementById("department").value.trim();
    const cgpa = document.getElementById("cgpa").value.trim();

    // Checking whether all fields are filled
    if (!name || !rollNumber || !department || !cgpa) {
        alert("Please enter all student details.");
        return;
    }

    // Creating Student object using user-provided values
    const student = new Student(
        name,
        rollNumber,
        department,
        cgpa
    );

    // Selecting profile container
    const profileContainer =
        document.getElementById("profileContainer");

    // Clearing previous profile
    profileContainer.innerHTML = "";

    // Creating profile card dynamically
    const card = document.createElement("div");
    card.className = "student-card";

    // Creating profile heading
    const title = document.createElement("h2");
    title.textContent = "Student Profile";

    card.appendChild(title);

    // Student details
    const details = [
        ["Name", student.name],
        ["Roll No", student.rollNumber],
        ["Department", student.department],
        ["CGPA", student.cgpa]
    ];

    // Creating HTML elements dynamically
    details.forEach(function ([label, value]) {

        const row = document.createElement("div");
        row.className = "student-row";

        const labelElement = document.createElement("div");
        labelElement.className = "label";
        labelElement.textContent = label + " :";

        const valueElement = document.createElement("div");
        valueElement.className = "value";
        valueElement.textContent = value;

        row.appendChild(labelElement);
        row.appendChild(valueElement);

        card.appendChild(row);
    });

    // Adding the dynamically created profile to webpage
    profileContainer.appendChild(card);
});
