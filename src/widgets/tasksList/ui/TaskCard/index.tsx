import { ToggleTask, RemoveTask } from "@/features";
import { Task } from "@/entities";

import * as classes from "./TaskCard.module.scss";

export const TaskCard = ({ task }: { task: Task }) => {
  return (
    <div className={classes.card}>
      <div
        className={`${classes.card__content} ${
          task.completed ? `${classes.card__content_completed}` : ""
        }`}
      >
        {task.content}
      </div>
      <div className={classes.card__actions}>
        <ToggleTask id={task.id} completed={task.completed} />
        <RemoveTask id={task.id} />
      </div>
    </div>
  );
};
