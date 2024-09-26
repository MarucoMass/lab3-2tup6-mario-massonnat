import { useState } from "react";

const Task = ({ task, deleteTask }) => {

const [taskDone, setTaskDone] = useState(false);

const handleCheckBox = () => {
    setTaskDone(!taskDone);
}

const handleDelete = () => {
  deleteTask()
}

  return (
    <li>
      <span className={taskDone ? `task-done` : ``}>{task}</span>
      <input type="checkbox" onChange={handleCheckBox}/>
      <button onClick={handleDelete}>Delete task</button>
    </li>
  );
};

export default Task;
