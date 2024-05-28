import { makeAutoObservable } from "mobx";

import { Task } from "./task";

class TaskStore {
  private tasks: Task[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTask(text: string) {
    this.tasks.push(new Task(text));
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  get completedTasks() {
    return this.tasks.filter((task) => task.completed);
  }
  get incompletedTasks() {
    return this.tasks.filter((task) => !task.completed);
  }
}

export const taskStore = new TaskStore();
