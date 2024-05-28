import { CompleteTask } from "@/features";
import { RemoveTask } from "@/features/remove/ui/removeTask";

import * as classes from "./TaskCard.module.scss";

export const TaskCard = ({ content, id }: { content: string; id: number }) => {
  return (
    <div className={classes.card}>
      <div className={classes.card__content}>{content}</div>
      <div className={classes.card__actions}>
        <CompleteTask id={id} />
        <RemoveTask id={id} />
      </div>
    </div>
  );
};
