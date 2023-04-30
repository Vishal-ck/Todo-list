import React from "react";
import "./TaskList.css";
import Task from "../EveryTask/Task";
const TaskList = (props) => {
  const { TaskData = [] } = props;
  if (TaskData.length == 0) {
    return <h3 className="expenses-list__fallback">Nothing here!!</h3>;
  }

  return (
    <div className="main-div">
      <div className="sub-div">
        {TaskData.map((tasks) => (
          <Task
            key={tasks.id}
            title={tasks.title}
            time={tasks.time}
            date={tasks.date}
          />
        ))}
      </div>
    </div>
  );
};
export default TaskList;
