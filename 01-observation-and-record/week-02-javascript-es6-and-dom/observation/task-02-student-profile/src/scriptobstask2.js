/*
    Observation Task 2
    Student Profile Manager
    Using JavaScript Class and DOM
*/


// -----------------------------------------
// Student Class
// -----------------------------------------

class Student {

    constructor(name, rollNumber, department, cgpa) {

        this.name = name;
        this.rollNumber = rollNumber;
        this.department = department;
        this.cgpa = Number(cgpa);
    }


    // Returns the student's initials
    getInitials() {

        const words = this.name.trim().split(/\s+/);

        if (words.length === 1) {
            return words[0].substring(0, 2).toUpperCase();
        }

        return (
            words[0].charAt(0) +
            words[words.length - 1].charAt(0)
        ).toUpperCase();
    }


    // Creates a short description for the profile
    getDescription() {

        return `${this.department} • Academic Profile`;
    }
}


// -----------------------------------------
// DOM Selection
// -----------------------------------------

const studentForm = document.getElementById("studentForm");
const profileArea = document.getElementById("profileArea");


// -----------------------------------------
// Generate Student Profile
// -----------------------------------------

studentForm.addEventListener("submit", function (event) {

    // Prevent the form from refreshing the page
    event.preventDefault();


    // Read user input
    const name = document.getElementById("studentName").value.trim();
    const rollNumber = document.getElementById("rollNumber").value.trim();
    const department = document.getElementById("department").value.trim();
    const cgpa = document.getElementById("cgpa").value;


    // Create Student object
    const student = new Student(
        name,
        rollNumber,
        department,
        cgpa
    );


    // Clear the previous content
    profileArea.innerHTML = "";


    // Create main profile container
    const profile = document.createElement("div");
    profile.classList.add("student-profile");


    // -----------------------------------------
    // Profile Header
    // -----------------------------------------

    const profileTop = document.createElement("div");
    profileTop.classList.add("profile-top");


    // Student initials
    const initials = document.createElement("div");
    initials.classList.add("initials");
    initials.textContent = student.getInitials();


    // Heading area
    const profileHeading = document.createElement("div");
    profileHeading.classList.add("profile-heading");


    const heading = document.createElement("h3");
    heading.textContent = student.name;


    const description = document.createElement("p");
    description.textContent = student.getDescription();


    profileHeading.appendChild(heading);
    profileHeading.appendChild(description);


    // Status badge
    const status = document.createElement("span");
    status.classList.add("profile-status");
    status.textContent = "GENERATED";


    // Add header elements
    profileTop.appendChild(initials);
    profileTop.appendChild(profileHeading);
    profileTop.appendChild(status);


    // -----------------------------------------
    // Profile Details
    // -----------------------------------------

    const details = document.createElement("div");
    details.classList.add("profile-details");


    // Helper function for creating detail boxes
    function createDetail(label, value, specialClass = "") {

        const detail = document.createElement("div");
        detail.classList.add("detail");


        const labelElement = document.createElement("span");
        labelElement.classList.add("detail-label");
        labelElement.textContent = label;


        const valueElement = document.createElement("span");
        valueElement.classList.add("detail-value");

        if (specialClass !== "") {
            valueElement.classList.add(specialClass);
        }

        valueElement.textContent = value;


        detail.appendChild(labelElement);
        detail.appendChild(valueElement);


        return detail;
    }


    // Add student information
    details.appendChild(
        createDetail("Roll Number", student.rollNumber)
    );

    details.appendChild(
        createDetail("Department", student.department)
    );

    details.appendChild(
        createDetail("Academic Status", "Active Student")
    );

    details.appendChild(
        createDetail(
            "CGPA",
            student.cgpa.toFixed(2),
            "cgpa-value"
        )
    );


    // -----------------------------------------
    // Add Everything to the Profile
    // -----------------------------------------

    profile.appendChild(profileTop);
    profile.appendChild(details);

    profileArea.appendChild(profile);

});