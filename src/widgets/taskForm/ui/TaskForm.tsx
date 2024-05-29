import { SubmitHandler, useForm } from "react-hook-form";
import { AddTask, addNewTask } from "@/features";
import { Input } from "@/shared/ui/Input";

import { useTaskForm } from "../lib/useTaskForm";
import * as classes from "./TaskForm.module.scss";

export const TaskForm = () => {
  const { register, errors, handleSubmit, submit } = useTaskForm();

  return (
    <form className={classes.form} onSubmit={handleSubmit(submit)}>
      <Input
        register={register("content", {
          required: { value: true, message: "Task required" },
          maxLength: { value: 100, message: "Too many symbols" },
        })}
        placeholder="Add a new task"
      />
      {errors.content && (
        <div className={classes.form__warning}>{errors.content.message}</div>
      )}
      <AddTask />
    </form>
  );
};
