import { Task } from "./task.js";
import { projectsArray, selectedProject, updateLocalStorage } from "./index.js";
export {tasksDiv, displayTask, displayProjectTasks };

const tasksDiv = document.querySelector(".tasks");
const createTaskButton = document.querySelector("#create-task-button");
const taskNameInput = document.querySelector("#task-name"); 
const descriptionInput = document.querySelector("#description"); 
const dueDateInput = document.querySelector("#due-date"); 
const priorityInput = document.querySelector("#priority"); 

function addTask(task) {
  projectsArray.forEach(project => {
    if (project.id === selectedProject[0]) {
      project.addToList(task);
      updateLocalStorage();
    }
  });
}

function removeTask(task) {
  projectsArray.forEach(project => {
    if (project.id === selectedProject[0]) {
      project.removeFromList(task);
      updateLocalStorage();
    }
  });
}

function displayTask(task) {
  const singleTaskDiv = document.createElement("div");
  singleTaskDiv.classList.add("task-card");

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "X";
  deleteButton.classList.add("delete-button");
  deleteButton.addEventListener("click", function() {
    singleTaskDiv.remove();
    removeTask(task);
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

function displayProjectTasks() {
  tasksDiv.innerHTML = "";
  projectsArray.forEach(project => {
    if (project.id === selectedProject[0]) {
      project.todoList.forEach(task => {
        displayTask(task);
      });
    }
  });
}

createTaskButton.addEventListener("click", () => {
  if (taskNameInput.value !== "" && descriptionInput.value !== "" 
      && dueDateInput.value !== "" && priorityInput.value !== "") {
    const newTask = new Task(taskNameInput.value, descriptionInput.value, dueDateInput.value, priorityInput.value);
    addTask(newTask);
    displayTask(newTask);
  }
});
