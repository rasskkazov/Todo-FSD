import { Task } from "@/entities";

import { TaskCard } from "./TaskCard";
import * as classes from "./TaskList.module.scss";

export const TaskList = ({
  title,
  tasksList,
}: {
  title: string;
  tasksList: Task[];
}) => {
  return (
    <div className={classes.taskList}>
      <div className={classes.taskList__title}>{title}</div>
      <ul>
        {tasksList.map((task) => (
          <li key={task.id}>
            <TaskCard task={task} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
