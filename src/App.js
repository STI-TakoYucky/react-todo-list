import Header from "./Components/Header/Header";
import AddTasks from "./Components/AddTasks/AddTask";
import Tasks from "./Components/Tasks/Tasks";
import { useEffect, useState } from "react";
import ReactDOM from 'react-dom/client';

function App() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    console.log(taskList);
  }, [taskList]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
      setTaskList(storedTasks);
    }
  }, [setTaskList]);

  return (
    <div className="App flex flex-col items-center justify-center m-12 sm:m-28 h-[43rem] max-h-[43rem]">
      <h1 className="text-2xl font-normal text-white block mb-4">@takoyuckyyy_</h1>
      <div className="bg-[#FDFDF8] w-[35rem] min-w-[30rem] text-center overflow-auto rounded-md drop-shadow-lg flex flex-col h-full">
        <Header />
        <AddTasks taskList={taskList} setTaskList={setTaskList} />
        <div className="sm:m-5 flex-grow">
          {taskList.map((task, index) => {
            return (
              <Tasks
                task={task}
                key={index + task}
                index={index}
                taskList={taskList}
                setTaskList={setTaskList}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
