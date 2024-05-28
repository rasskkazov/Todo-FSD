import { taskStore } from "@/entities";
import { TaskCard } from "./TaskCard";
import { observer } from "mobx-react";

export const TaskList = observer(() => {
  return (
    <div className="container">
      <div className="title">{`Tasks to do - ${4}`}</div>
      <div className="list">
        {taskStore.incompletedTasks.map((task) => {
          return <TaskCard id={task.id} content={task.content} key={task.id} />;
        })}
      </div>
    </div>
  );
});
