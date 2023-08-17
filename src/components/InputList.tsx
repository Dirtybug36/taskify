import React from "react";
import { Todo } from "../model";
import { SingleTask } from "./SingleTask";
export interface Props {
  tasks: Todo[];
  setTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const InputList: React.FC<Props> = ({ tasks, setTasks }) => {
  return (
    <div
      className="flex justify-evenly w-[90%]
    flex-wrap max-[700px]:w-[95%] "
    >
      {tasks.map((task) => (
        <SingleTask
          tasks={tasks}
          task={task.task}
          isDone={task.isDone}
          id={task.id}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
};
