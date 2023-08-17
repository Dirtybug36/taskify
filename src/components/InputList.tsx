import React from "react";
import { Todo } from "../model";
interface Props {
  tasks: Todo[];
  setTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const InputList: React.FC<Props> = ({ tasks, setTasks }) => {
  return <ul></ul>;
};
