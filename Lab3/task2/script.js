document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("new-task");
  const addBtn = document.getElementById("add-btn");
  const todoList = document.getElementById("todo-list");
  const doneCountSpan = document.getElementById("done-count");
  const todoCountSpan = document.getElementById("todo-count");

  const initialTasks = [
    { text: "First item", done: true },
    { text: "Second item", done: false },
    { text: "Third item", done: false },
  ];

  initialTasks.forEach((task) => addTask(task.text, task.done));

  addBtn.addEventListener("click", () => {
    const text = taskInput.value.trim();
    if (text !== "") {
      addTask(text);
      taskInput.value = "";
      taskInput.focus();
    }
  });

  taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      const text = taskInput.value.trim();
      if (text !== "") {
        addTask(text);
        taskInput.value = "";
      }
    }
  });

  function updateStats() {
    const totalTasks = document.querySelectorAll(".todo-item").length;
    const completedTasks = document.querySelectorAll(".todo-item.done").length;
    const pendingTasks = totalTasks - completedTasks;

    if (doneCountSpan) doneCountSpan.textContent = completedTasks;
    if (todoCountSpan) todoCountSpan.textContent = pendingTasks;
  }

  function addTask(text, isDone = false) {
    const li = document.createElement("li");
    li.className = "todo-item";
    if (isDone) {
      li.classList.add("done");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "todo-checkbox";
    checkbox.checked = isDone;

    checkbox.addEventListener("change", () => {
      li.classList.toggle("done");
      updateStats();
    });

    const span = document.createElement("span");
    span.className = "todo-text";
    span.textContent = text;

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerHTML = "&#128465;";

    deleteBtn.addEventListener("click", () => {
      todoList.removeChild(li);
      updateStats();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    todoList.appendChild(li);
    updateStats();
  }
});