// Experiment 4: Dynamic Webpage using JavaScript
// Demonstrates DOM manipulation and event handling

// Selecting HTML elements using their IDs
const nameInput = document.getElementById("nameInput");
const courseInput = document.getElementById("courseInput");
const displayBtn = document.getElementById("displayBtn");
const output = document.getElementById("output");

// Event listener for the button
displayBtn.addEventListener("click", function () {

    // Read values entered by the user
    const name = nameInput.value.trim();
    const course = courseInput.value.trim();

    // Check whether the input fields are empty
    if (name === "" || course === "") {

        output.textContent = "Please enter both name and course.";

        return;
    }

    // Clear the previous output
    output.innerHTML = "";

    // Dynamically create a new div element
    const profileCard = document.createElement("div");

    // Add CSS class dynamically
    profileCard.classList.add("profile-card");

    // Create heading dynamically
    const heading = document.createElement("h3");
    heading.textContent = "Student Details";

    // Create paragraph for name
    const namePara = document.createElement("p");
    namePara.innerHTML = "<strong>Name:</strong> " + name;

    // Create paragraph for course
    const coursePara = document.createElement("p");
    coursePara.innerHTML = "<strong>Course:</strong> " + course;

    // Add elements to the dynamically created card
    profileCard.appendChild(heading);
    profileCard.appendChild(namePara);
    profileCard.appendChild(coursePara);

    // Display the dynamically created content
    output.appendChild(profileCard);

});