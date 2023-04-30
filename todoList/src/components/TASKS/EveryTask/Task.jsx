import React from "react";
import "./Task.css";
import TaskDate from "../TaskDate/TaskDate";
const Task = (props) => {
  const { date = new Date(), time = "11pm", title = "null" } = props;
  return (
    <div className="main-div">
      <TaskDate date={date} />
      <div className="title-div">
        <h2 className="title-div h2">{title}</h2>
        <div className="time-div">{props.time}</div>
      </div>
    </div>
  );
};
export default Task;
