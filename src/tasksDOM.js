export { addTask }

const tasksDiv = document.querySelector(".tasks");

function addTask(task) {
  const singleTaskDiv = document.createElement("div");
  singleTaskDiv.classList.add("task-card");
  const titleDiv = document.createElement("div");
  titleDiv.textContent = task.title;
  const descriptionP = document.createElement("p");
  descriptionP.textContent = task.description;
  const dueDateDiv = document.createElement("div");
  dueDateDiv.textContent = task.dueDate;
  const priorityDiv = document.createElement("div");
  priorityDiv.textContent = task.priority;

  singleTaskDiv.append(titleDiv);
  singleTaskDiv.append(descriptionP);
  singleTaskDiv.append(dueDateDiv);
  singleTaskDiv.append(priorityDiv);

  tasksDiv.append(singleTaskDiv);
}