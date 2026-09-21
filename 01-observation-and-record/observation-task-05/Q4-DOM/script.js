// Q4 - DOM Manipulation
// Demonstrates changing content, style and attributes dynamically.

// Select HTML elements using their IDs
const message = document.getElementById("message");
const status = document.getElementById("status");

const contentButton = document.getElementById("contentButton");
const styleButton = document.getElementById("styleButton");
const attributeButton = document.getElementById("attributeButton");

const linkDemo = document.getElementById("linkDemo");

// --------------------------------------
// 1. CHANGE CONTENT
// --------------------------------------

contentButton.addEventListener("click", function () {

    message.textContent = "Content updated successfully!";

    status.textContent =
        "JavaScript changed the text inside the HTML element using the DOM.";

});

// --------------------------------------
// 2. CHANGE STYLE
// --------------------------------------

styleButton.addEventListener("click", function () {

    message.style.color = "#ffb347";

    message.style.fontSize = "34px";

    status.style.color = "#ffb347";

    status.textContent =
        "JavaScript dynamically changed the CSS styles of the elements.";

});

// --------------------------------------
// 3. CHANGE ATTRIBUTE
// --------------------------------------

attributeButton.addEventListener("click", function () {

    linkDemo.setAttribute(
        "href",
        "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model"
    );

    linkDemo.textContent =
        "Open Updated DOM Documentation";

    status.textContent =
        "The href attribute and link text were changed dynamically.";

});