import { taskStore } from "@/entities";

export const addNewTask = (content: string) => {
  taskStore.addTask(content);
};
