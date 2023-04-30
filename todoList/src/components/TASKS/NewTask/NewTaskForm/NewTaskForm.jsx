import React, { useState } from "react";
import "./NewTaskForm.css";
const NewTaskForm = (props) => {
  const { save } = props;
  let [title, setTitle] = useState("");
  let [time, settime] = useState("");
  let [date, setDate] = useState("");

  const onTitleChangeHandler = (event) => setTitle(event.target.value);
  const onDateChangeHandler = (event) => setDate(event.target.value);
  const ontimeChangeHandler = (event) => settime(event.target.value);

  const onFormSubmitHandler = (event) => {
    event.preventDefault();
    console.log("submit woked");
    const NewTask = {
      title,
      date: new Date(date),
      time,
    };
    save(NewTask);
    setDate("");
    settime("");
    setTitle("");
  };

  return (
    <form>
      <div className="newTask__controls">
        <div className="newTask__control">
          <label htmlFor="title">Title </label>
          <input
            type="text"
            id="ExpenseTitle"
            name="title"
            value={title}
            onChange={onTitleChangeHandler}
          ></input>
        </div>
        <div className="newTask__control">
          <label htmlFor="time">Time </label>
          <input
            type="time"
            id="Expensetime"
            name="time"
            value={time}
            onChange={ontimeChangeHandler}
          ></input>
        </div>
        <div className="newTask__control">
          <label htmlFor="date">Date </label>
          <input
            type="date"
            id="ExpenseDate"
            name="date"
            value={date}
            onChange={onDateChangeHandler}
          ></input>
        </div>
      </div>
      <div>
        <div className="newTask__actions">
          <button>Cancel</button>
          <button onClick={onFormSubmitHandler}>Add Task</button>
        </div>
      </div>
    </form>
  );
};
export default NewTaskForm;
