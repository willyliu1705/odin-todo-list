import { Task } from "./task.js";
import { projectsArray, selectedProject } from "./index.js";
export { displayTask, tasksDiv };

const tasksDiv = document.querySelector(".tasks");
const createTaskButton = document.querySelector("#create-task-button");
const taskNameInput = document.querySelector("#task-name"); 
const descriptionInput = document.querySelector("#description"); 
const dueDateInput = document.querySelector("#due-date"); 
const priorityInput = document.querySelector("#priority"); 

function addTask(task) {
  projectsArray.forEach(element => {
    if (element.id === selectedProject[0]) {
      element.updateTodoList(task);
    }
  });
}

function displayTask(task) {
  const singleTaskDiv = document.createElement("div");
  singleTaskDiv.classList.add("task-card");

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", () => {
    singleTaskDiv.remove();
  });

  const titleDiv = document.createElement("div");
  titleDiv.textContent = task.title;
  const descriptionP = document.createElement("p");
  descriptionP.textContent = task.description;
  const dueDateDiv = document.createElement("div");
  dueDateDiv.textContent = task.dueDate;
  const priorityDiv = document.createElement("div");
  priorityDiv.textContent = task.priority;

  singleTaskDiv.append(deleteButton);
  singleTaskDiv.append(titleDiv);
  singleTaskDiv.append(descriptionP);
  singleTaskDiv.append(dueDateDiv);
  singleTaskDiv.append(priorityDiv);

  tasksDiv.append(singleTaskDiv);
}

createTaskButton.addEventListener("click", () => {
  if (taskNameInput.value !== "" && descriptionInput.value !== "" 
      && dueDateInput.value !== "" && priorityInput.value !== "") {
    const newTask = new Task(taskNameInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value);
    addTask(newTask);
    displayTask(newTask);
  }
});