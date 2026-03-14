import { Project } from "./project.js";
import { displayTask, tasksDiv } from "./tasksDOM.js";
import { projectsArray, selectedProject, updateLocalStorage } from "./index.js";
export { addProject, displayProject, displayAllProjects };

const projectsDiv = document.querySelector(".projects");
const createProjectButton = document.querySelector("#create-project-button");
const inputElement = document.querySelector("#project-name"); 

function addProject(project) {
  projectsArray.push(project);
}

function displayProject(project) {
  const singleProjectButton = document.createElement("button");
  singleProjectButton.append(project.name);
  singleProjectButton.classList.add("project");
  singleProjectButton.addEventListener("click", function() {
    tasksDiv.innerHTML = "";
    selectedProject[0] = project.id;
    const todoListToDisplay = project.todoList;
    todoListToDisplay.forEach(element => {
      displayTask(element);
    });
  });

  projectsDiv.append(singleProjectButton);
}

function displayAllProjects() {
  projectsDiv.innerHTML = "";
  projectsArray.forEach(project => {
    displayProject(project);
  });
}

createProjectButton.addEventListener("click", () => {
  if (inputElement.value !== ""){
    const newProject = new Project(inputElement.value, [], null);
    addProject(newProject);
    updateLocalStorage();
    displayProject(newProject);
  }
});
