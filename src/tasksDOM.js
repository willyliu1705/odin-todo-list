export { addTask }

const tasksDiv = document.querySelector(".tasks");

function addTask(task) {
  const singleTaskDiv = document.createElement("div");
  singleTaskDiv.classList.add("task-card");
  const titleDiv = document.createElement("div");
  titleDiv.textContent = task.title;
  const dueDateDiv = document.createElement("div");
  dueDateDiv.textContent = task.dueDate;

  singleTaskDiv.append(titleDiv);
  singleTaskDiv.append(dueDateDiv);
  tasksDiv.append(singleTaskDiv);
}