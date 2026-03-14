import "./styles.css";
import "./project.js";
import "./task.js";
import "./projectsDOM.js";
import "./tasksDOM.js";
import { displayProject } from "./projectsDOM.js";
import { Project } from "./project.js";
export { projectsArray, selectedProject };

const defaultProject = new Project("Default");
displayProject(defaultProject);

const projectsArray = [defaultProject];
let selectedProject = [`${defaultProject.id}`];

// be able to change a task
// include date-fns from npm
// implement localStorage
