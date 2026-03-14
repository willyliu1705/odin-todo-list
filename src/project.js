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

  updateTodoList(task) {
    this.#todoList.push(task);
  }
}