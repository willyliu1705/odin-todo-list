export class Project {
  #name;
  #todoList;
  #id;

  constructor(name) {
    this.#name = name;
    this.#todoList = [];
    this.#id = crypto.randomUUID();
  }

  get name() {
    return this.#name;
  }

  get todoList() {
    return this.#todoList;
  }
  
  get id() {
    return this.#id;
  }

  addToList(task) {
    this.#todoList.push(task);
  }

  removeFromList(task) {
    const index = this.#todoList.findIndex(existingTask => existingTask.id === task.id);
    this.#todoList.splice(index, 1);
    console.log(this.#todoList);
  }
}