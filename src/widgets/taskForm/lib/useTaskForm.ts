import { addNewTask } from "@/features";
import { SubmitHandler, useForm } from "react-hook-form";

type NewTask = {
  content: string;
};

export const useTaskForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<NewTask>();

  const submit: SubmitHandler<NewTask> = (data) => {
    addNewTask(data.content);
    reset();
  };

  return { register, errors, handleSubmit, submit };
};
