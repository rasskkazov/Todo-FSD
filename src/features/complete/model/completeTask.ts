import { taskStore } from "@/entities";

export const completeTask = (id: number) => {
  taskStore.toggleTask(id);
  console.log(taskStore.incompletedTasks);
};
