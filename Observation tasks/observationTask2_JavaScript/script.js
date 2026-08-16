class Student {
  constructor(name, rollNumber, department, cgpa) {
    this.name = name;
    this.rollNumber = rollNumber;
    this.department = department;
    this.cgpa = cgpa;
  }
}

document.getElementById("createBtn").addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const rollNumber = document.getElementById("rollNo").value.trim();
  const department = document.getElementById("department").value.trim();
  const cgpa = document.getElementById("cgpa").value.trim();

  if (!name || !rollNumber || !department || !cgpa) {
    alert("Please enter all student details.");
    return;
  }

  const student = new Student(name, rollNumber, department, cgpa);

  const profileContainer = document.getElementById("profileContainer");
  profileContainer.innerHTML = "";

  const card = document.createElement("div");
  card.className = "student-card";

  const title = document.createElement("h2");
  title.textContent = "Student Profile";
  card.appendChild(title);

  const details = [
    ["Name", student.name],
    ["Roll No", student.rollNumber],
    ["Department", student.department],
    ["CGPA", student.cgpa]
  ];

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

  profileContainer.appendChild(card);
});
