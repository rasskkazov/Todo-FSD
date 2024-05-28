import { useState } from "react";
import { addNewTask } from "@/features";

export const useTaskForm = () => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setNewTaskContent("");
    addNewTask(newTaskContent);
  };

  return {
    newTaskContent,
    setNewTaskContent,
    handleSubmit,
  };
};
