import { AddTask } from "@/features";
import { Input } from "@/shared/ui/Input";

import * as classes from "./TaskForm.module.scss";

export const TaskForm = () => {
  return (
    <div className={classes.container}>
      <Input placeholder="Add a new task" />
      <AddTask />
    </div>
  );
};
