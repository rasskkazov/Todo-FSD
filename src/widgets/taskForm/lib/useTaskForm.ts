import { useState } from "react";

import { addNewTask } from "../model/addNewTask";

export const useTaskForm = () => {
  const [newTaskText, setNewTaskText] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewTaskText("");
    addNewTask(newTaskText);
  };

  return { newTaskText, setNewTaskText, handleSubmit };
};
