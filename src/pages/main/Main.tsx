import { observer } from "mobx-react";
import { TaskForm, TaskList } from "@/widgets";
import { taskStore } from "@/entities";

import * as classes from "./Main.module.scss";

export const Main = observer(() => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <TaskForm />
        <TaskList
          tasksList={taskStore.incompletedTasks}
          title={`Tasks to do - ${taskStore.incompletedTasks.length}`}
        />
        <TaskList
          tasksList={taskStore.completedTasks}
          title={`Done - ${taskStore.completedTasks.length}`}
        />
      </div>
    </div>
  );
});
