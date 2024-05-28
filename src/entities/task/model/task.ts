import { makeAutoObservable } from "mobx";

export class Task {
  id = Math.random();
  content = "";
  completed = false;

  constructor(content: string) {
    this.content = content;
    makeAutoObservable(this);
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}
