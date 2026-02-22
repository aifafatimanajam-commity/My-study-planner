// Load saved subjects when app starts
window.onload = function() {
  let savedTasks = localStorage.getItem("tasks");
  
  if (savedTasks) {
    document.getElementById("taskList").innerHTML = savedTasks;
  }
};

// Add new subject
function addTask() {
  let input = document.getElementById("taskInput");
  let task = input.value;

  if (task === "") return;

  let li = document.createElement("li");
  li.textContent = task;

  document.getElementById("taskList").appendChild(li);

  // Save tasks
  saveTasks();

  input.value = "";
}

// Save tasks to localStorage
function saveTasks() {
  let list = document.getElementById("taskList").innerHTML;
  localStorage.setItem("tasks", list);
}
