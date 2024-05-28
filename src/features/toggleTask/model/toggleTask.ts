import { taskStore } from "@/entities";

export const toggleTask = (id: number) => {
  taskStore.toggleTask(id);
  console.log(taskStore.incompletedTasks);
};
