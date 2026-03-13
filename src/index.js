import { Project } from "./project.js";
import { Task } from "./task.js";
import { addProject } from "./projectsDOM.js";
import { addTask } from "./tasksDOM.js";
import "./styles.css";

const defaultProject = new Project("Default");
const project2 = new Project("project2");
const project3 = new Project("project3");

const task1 = new Task("biology quiz", "a", "march", "low");
const task2 = new Task("chem homework", "b", "april", "medium");
const task3 = new Task("programming assignment", "c", "may", "high");
const task4 = new Task("programming assignment", "c", "may", "high");
const task5 = new Task("programming assignment", "c", "may", "high");
const task6 = new Task("programming assignment", "c", "may", "high");
const task7 = new Task("programming assignment", "c", "may", "high");
const task8 = new Task("programming assignment", "c", "may", "high");

addProject(defaultProject);
addProject(project2);
addProject(project3);
addTask(task1);
addTask(task2);
addTask(task3);
addTask(task4);
addTask(task5);
addTask(task6);
addTask(task7);
addTask(task8);
