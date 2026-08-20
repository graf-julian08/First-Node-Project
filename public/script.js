const input = document.getElementById("taskInput");
const button = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");

// Funktion zum Hinzufügen im DOM
function addTaskToDOM(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;
  list.appendChild(li);
}

// Funktion: Task an Backend schicken
async function addTask() {
  const taskText = input.value;
  if (taskText === "") return;

  const response = await fetch("/api/tasks", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: taskText })
  });

  const data = await response.json();
  if (data.status === "ok") {
    addTaskToDOM(taskText);
    input.value = "";
  }
}

// Event Listener
button.addEventListener("click", addTask);
input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTask();
});

// Beim Laden alle Tasks holen
async function loadTasks() {
  const response = await fetch("/api/tasks");
  const tasks = await response.json();

  tasks.forEach(task => addTaskToDOM(task.text));
}

loadTasks();