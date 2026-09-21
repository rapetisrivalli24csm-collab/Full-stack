/* =========================================================
   OBSERVATION TASK 3
   Interactive To-Do List
   JavaScript + DOM + Event Listeners
   ========================================================= */


/* ---------- Select DOM elements ---------- */

const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const emptyMessage = document.getElementById("emptyMessage");
const taskCounter = document.getElementById("taskCounter");
const inputMessage = document.getElementById("inputMessage");


/* ---------- Task numbering ---------- */

let taskNumber = 0;


/* =========================================================
   UPDATE TASK COUNTER
   ========================================================= */

function updateTaskCounter() {

    const tasks = taskList.querySelectorAll(".task-item");
    const totalTasks = tasks.length;

    if (totalTasks === 1) {
        taskCounter.textContent = "1 TASK";
    } else {
        taskCounter.textContent = `${totalTasks} TASKS`;
    }
}


/* =========================================================
   UPDATE EMPTY MESSAGE
   ========================================================= */

function updateEmptyMessage() {

    const tasks = taskList.querySelectorAll(".task-item");

    if (tasks.length === 0) {
        emptyMessage.style.display = "block";
    } else {
        emptyMessage.style.display = "none";
    }
}


/* =========================================================
   CREATE TASK
   ========================================================= */

function createTask(taskText) {

    taskNumber++;

    /* ---------- Main task element ---------- */

    const taskItem = document.createElement("div");
    taskItem.classList.add("task-item");


    /* ---------- Task number ---------- */

    const indicator = document.createElement("div");
    indicator.classList.add("task-indicator");
    indicator.textContent = taskNumber;


    /* ---------- Task text ---------- */

    const textElement = document.createElement("p");
    textElement.classList.add("task-text");
    textElement.textContent = taskText;


    /* ---------- Button container ---------- */

    const actions = document.createElement("div");
    actions.classList.add("task-actions");


    /* ---------- Complete button ---------- */

    const completeButton = document.createElement("button");

    completeButton.type = "button";
    completeButton.classList.add("complete-button");
    completeButton.textContent = "Complete";


    /* ---------- Delete button ---------- */

    const deleteButton = document.createElement("button");

    deleteButton.type = "button";
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";


    /* =====================================================
       COMPLETE BUTTON
       ===================================================== */

    completeButton.addEventListener("click", function () {

        taskItem.classList.toggle("completed");

        if (taskItem.classList.contains("completed")) {

            completeButton.textContent = "Completed";
            indicator.textContent = "✓";

        } else {

            completeButton.textContent = "Complete";
            indicator.textContent = taskNumber;

        }

    });


    /* =====================================================
       DELETE BUTTON
       ===================================================== */

    deleteButton.addEventListener("click", function () {

        taskItem.remove();

        updateTaskCounter();
        updateEmptyMessage();

    });


    /* ---------- Build task ---------- */

    actions.appendChild(completeButton);
    actions.appendChild(deleteButton);

    taskItem.appendChild(indicator);
    taskItem.appendChild(textElement);
    taskItem.appendChild(actions);


    /* ---------- Add task to webpage ---------- */

    taskList.appendChild(taskItem);


    /* ---------- Update interface ---------- */

    updateTaskCounter();
    updateEmptyMessage();
}


/* =========================================================
   FORM SUBMIT EVENT
   ========================================================= */

taskForm.addEventListener("submit", function (event) {

    // Prevent page refresh
    event.preventDefault();

    // Get entered task
    const taskText = taskInput.value.trim();


    /* ---------- Validate input ---------- */

    if (taskText === "") {

        inputMessage.textContent =
            "Please enter a task before adding.";

        taskInput.focus();

        return;
    }


    /* ---------- Clear error message ---------- */

    inputMessage.textContent = "";


    /* ---------- Create task ---------- */

    createTask(taskText);


    /* ---------- Clear input ---------- */

    taskInput.value = "";

    taskInput.focus();

});