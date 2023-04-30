import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NewTask from "./components/TASKS/NewTask/NewTask";
import Task from "./components/TASKS/EveryTask/Task";
import TaskList from "./components/TASKS/TaskList/TaskList";
const TASK_DATA = [
  {
    id: "e1",
    title: "Dinner Date?",
    time: "8:30",
    date: new Date(2023, 3, 25),
  },
  {
    id: "e2",
    title: "Icecream?",
    time: "12:00",
    date: new Date(2020, 3, 25),
  },
  {
    id: "e3",
    title: "Movie?",
    time: "4:00",
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "Gym",
    time: "11:00",
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [count, setCount] = useState(0);

  const [finalTask, setfinalTask] = useState(TASK_DATA);
  const onNewSave = (NewTask) => {
    setfinalTask((previousTask) => [NewTask, ...previousTask]);

    console.log("finalTask");
  };
  return (
    <div className="App">
      <NewTask onNewTaskSave={onNewSave} />
      <TaskList TaskData={finalTask} />
    </div>
  );
}

export default App;
