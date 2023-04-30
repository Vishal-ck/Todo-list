import React from "react";
import "./TaskDate.css";
const TaskDate = (props) => {
  const { date } = props;
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "numeric" });
  const year = date.getFullYear();
  return (
    <div>
      <div className="Task-date">
        <div className="Task-date__month">{month}</div>
        <div className="Task-date__year">{day}</div>
        <div className="Task-date__day">{year}</div>
      </div>
    </div>
  );
};
export default TaskDate;
