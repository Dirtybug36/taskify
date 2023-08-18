import React from "react";
import { Todo } from "../model";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdDone } from "react-icons/md";
interface Props {
  setTasks: React.Dispatch<React.SetStateAction<Todo[]>>;
  isDone: boolean;
  id: number;
  task: string;
  tasks: Todo[];
}
export const SingleTask = ({ setTasks, isDone, id, task, tasks }: Props) => {
  const handleDone = (id: number) => {
    setTasks(tasks.map((e) => (e.id === id ? { ...e, isDone: !e.isDone } : e)));
  };
  const handleDelete = (id: number) => {
    setTasks(tasks.filter((e) => e.id !== id));
  };
  return (
    <form className="flex w-[30%] rounded-md p-5 mt-[15px] items-center bg-[url(https://img.freepik.com/free-photo/crumpled-yellow-paper-background-close-up_60487-2390.jpg?size=626&ext=jpg)] max-[700px]:w-[100%]">
      {!isDone ? (
        <span className="flex-1 p-1 border-none text-xl focus:outline-none">
          {task}
        </span>
      ) : (
        <s className="flex-1 p-1 border-none text-xl focus:outline-none">
          {task}
        </s>
      )}

      <span className="ml-[10px] text-2xl cursor-pointer">
        <AiFillEdit />
      </span>
      <span className="ml-[10px] text-2xl cursor-pointer">
        <AiFillDelete onClick={() => handleDelete(id)} />
      </span>
      <span className="ml-[10px] text-2xl cursor-pointer">
        <MdDone onClick={() => handleDone(id)} />
      </span>
    </form>
  );
};
