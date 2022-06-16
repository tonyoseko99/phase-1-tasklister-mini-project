document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let button = document.getElementById("new-task-description")
  let task = document.getElementById("create-task-form")
  //let submit = document.getElementById("submit")
  let newTaskPro = document.getElementById("new-task-priority")

  let newTaskUl = document.getElementById("tasks")

  task.addEventListener("submit", createNewTask);
});

let createNewTask = event => {
  event.preventDefault();

  let button = document.getElementById("new-task-description");
  let newTask = document.createElement("li");

  newTask.innerText = button.value

  appendNewTask(newTask);
  event.target.reset();
};

let appendNewTask = task => {
  document.getElementById("tasks").appendChild(task)
};

