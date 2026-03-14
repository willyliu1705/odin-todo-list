export class Project {
  name;
  todoList;
  id;

  constructor(name, todoList, id) {
    this.name = name;
    this.todoList = todoList;
    if (id === null) {
      this.id = crypto.randomUUID();
    } else {
      this.id = id;
    }
  }

  get name() {
    return this.name;
  }

  get todoList() {
    return this.todoList;
  }
  
  get id() {
    return this.id;
  }

  addToList(task) {
    this.todoList.push(task);
  }

  removeFromList(task) {
    const index = this.todoList.findIndex(existingTask => existingTask.id === task.id);
    this.todoList.splice(index, 1);
  }
}
