import { ToggleTask } from "@/features";
import { RemoveTask } from "@/features/remove/ui/removeTask";

import * as classes from "./TaskCard.module.scss";

export const TaskCard = ({
  content,
  id,
  completed = false,
}: {
  content: string;
  id: number;
  completed?: boolean;
}) => {
  return (
    <div className={`${classes.card} ${completed ? "completed" : ""}`}>
      <div className={classes.card__content}>{content}</div>
      <div className={classes.card__actions}>
        <ToggleTask id={id} />
        <RemoveTask id={id} />
      </div>
    </div>
  );
};
