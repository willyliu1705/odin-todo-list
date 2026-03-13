export class Project {
  #name;
  #todoList;

  constructor(name) {
    this.#name = name;
    this.#todoList = [];
  }

  get name() {
    return this.#name;
  }
}