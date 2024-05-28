import { taskStore } from "@/entities";

export const addNewTask = (text: string) => {
  taskStore.addTask(text);
};
