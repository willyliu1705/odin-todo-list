import "./styles.css";
import "./project.js";
import "./task.js";
import "./projectsDOM.js";
import "./tasksDOM.js";
import { addProject, displayProject, displayAllProjects } from "./projectsDOM.js";
import { Project } from "./project.js";
import { displayProjectTasks } from "./tasksDOM.js";
export { projectsArray, selectedProject, updateLocalStorage };

let projectsArray = [];

let selectedProject;

// localStorage.clear();

if (!localStorage.getItem("projects")) {
  const defaultProject = new Project("Default", [], null);
  selectedProject = [`${defaultProject.id}`];
  addProject(defaultProject);
  updateLocalStorage();
  displayProject(defaultProject);
  console.log("Previous storage not found");
} else {
  const plainProjectsArray = JSON.parse(localStorage.getItem("projects"));
  plainProjectsArray.forEach(projectObject => {
    const actualProjectInstance = new Project(projectObject.name, projectObject.todoList, projectObject.id);
    if (projectObject.name == "Default") {
      selectedProject = [`${projectObject.id}`];
    }
    projectsArray.push(actualProjectInstance);
  });
  displayAllProjects();
  displayProjectTasks();
  console.log("We found storage");
}

function updateLocalStorage() {
  localStorage.setItem("projects", JSON.stringify(projectsArray));
}
