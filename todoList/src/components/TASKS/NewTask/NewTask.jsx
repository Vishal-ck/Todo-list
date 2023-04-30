import React from "react";
import "./NewTask.css";
import NewTaskForm from "./NewTaskForm/NewTaskForm";
const NewTask = (props) => {
  const { onNewTaskSave } = props;
  const onAddTask = (NewTask) => {
    const modifiedTask = {
      ...NewTask,
      id: Math.random() * 10,
    };
    console.log("form submit call bac worked");
    onNewTaskSave(modifiedTask);
  };
  return (
    <div className="newTask">
      <NewTaskForm save={onAddTask} />
    </div>
  );
};
export default NewTask;
