import { AddTask } from "@/features";
import { Input } from "@/shared/ui/Input";

import { useTaskForm } from "../lib/useTaskForm";
import * as classes from "./TaskForm.module.scss";

export const TaskForm = () => {
  const { newTaskText, setNewTaskText, handleSubmit } = useTaskForm();

  return (
    <form className={classes.form} onSubmit={(e) => handleSubmit(e)}>
      <Input
        placeholder="Add a new task"
        onChange={setNewTaskText}
        value={newTaskText}
      />
      <AddTask />
    </form>
  );
};
