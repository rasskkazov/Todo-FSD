import { observer } from "mobx-react";
import { TaskList, TaskForm } from "@/widgets";
import { taskStore } from "@/entities";

import * as classes from "./Main.module.scss";
import { Suspense } from "react";

export const Main = observer(() => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <TaskForm />
        <Suspense fallback={<div>Loading...</div>}>
          {!!taskStore.incompletedTasks.length && (
            <TaskList
              tasksList={taskStore.incompletedTasks}
              title={`Tasks to do - ${taskStore.incompletedTasks.length}`}
            />
          )}
          {!!taskStore.completedTasks.length && (
            <TaskList
              tasksList={taskStore.completedTasks}
              title={`Done - ${taskStore.completedTasks.length}`}
            />
          )}
        </Suspense>
      </div>
    </div>
  );
});
