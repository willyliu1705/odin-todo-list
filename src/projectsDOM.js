export { addProject }

const projectsDiv = document.querySelector(".projects");

const projectsArray = [];

function addProject(project) {
  projectsArray.push(project);
  const singleProjectButton = document.createElement("button");
  singleProjectButton.append(project.name);
  singleProjectButton.classList.add("project");
  projectsDiv.append(singleProjectButton);
}