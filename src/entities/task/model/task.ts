import { makeAutoObservable } from "mobx";

export class Task {
  id = Math.random();
  text = "";
  completed = false;

  constructor(text: string) {
    this.text = text;
    makeAutoObservable(this);
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}
