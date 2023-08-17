import React, { useRef } from "react";
export interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  formHandler: (e: React.FormEvent) => void;
}
//we need to define the kind of props that we are passing
export const InputField: React.FC<Props> = ({ task, setTask, formHandler }) => {
  //console.log(task);
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        formHandler(e);
        inputRef.current?.blur();
      }}
      className="flex, w-[60%] relative items-center max-[700px]:w-[95%]"
    >
      <input
        ref={inputRef}
        value={task}
        onChange={(e) => setTask(e.target.value)}
        className="w-full rounded-[50px] px-8 py-4 border-none duration-200  shadow-[inset_0_0_5px_black] focus:shadow-[0_0_10px_1000px_rgba(0,0,0,0.2)] outline-none"
        type="input"
        placeholder="
    Enter a task"
      />
      <button className="absolute w-[40px] h-[30px] m-3 rounded-[30px] right-0 border-none text-xl bg-sky-500 text-white duration-[0.2s_all] shadow-[0_0_10px_black] hover:bg-sky-600 active:scale-75 active:shadow-[0_0_5px_black]  ">
        Go
      </button>
    </form>
  );
};
