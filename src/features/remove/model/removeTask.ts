import { taskStore } from "@/entities";

export const removeTask = (id: number) => {
  taskStore.removeTask(id);
};
