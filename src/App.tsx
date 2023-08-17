import React, { useState } from "react";
import { Todo } from "./model";
import { InputField } from "./components/InputField";
import { InputList } from "./components/InputList";
//we put React.Fc for functional component
const App: React.FC = () => {
  const [task, setTask] = useState<string>("");
  //to store our task array
  const [tasks, setTasks] = useState<Todo[]>([]);
  //handle form and generate array
  function handleForm(e: React.FormEvent) {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, { id: Date.now(), task, isDone: false }]);
    }
    setTask("");
  }
  return (
    <div className="font-primary w-[100vw] h-[100vh] flex flex-col items-center bg-blue-500">
      <span className="uppercase mx-0 my-8 text-white z-[1] text-center md:my-4 md:mx-0 md:text-4xl">
        Taskify
      </span>
      <InputField task={task} setTask={setTask} formHandler={handleForm} />

      <InputList tasks={tasks} setTasks={setTasks} />
    </div>
  );
};

export default App;
