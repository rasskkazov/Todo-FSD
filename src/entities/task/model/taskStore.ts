import { makeAutoObservable } from "mobx";

import { Task } from "./task";

class TaskStore {
  private tasks: Task[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addTask(content: string) {
    this.tasks.push(new Task(content));
  }

  removeTask(id: number) {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  }

  toggleTask(id: number) {
    this.tasks[
      this.tasks.findIndex((task) => task.id === id)
    ].toggleCompleted();
  }

  get completedTasks() {
    return this.tasks.filter((task) => task.completed);
  }
  get incompletedTasks() {
    return this.tasks.filter((task) => !task.completed);
  }
}

export const taskStore = new TaskStore();
