import { useState } from "react";

const NewTask = ({ addNewTask }) => {
  const [task, setTask] = useState("");

  const handleInput = (e) => {
    setTask(e.target.value);
  };

  const handleButton = () => {
    if (task === ""){
      alert("Please enter a task");
      return;
    }
    addNewTask(task);
    setTask("");
  };

  return (
    <div style={{display: "flex", gap: "1rem"}}>
      <input type="text" value={task} onChange={handleInput} />
      <button onClick={handleButton}>Add task</button>
    </div>
  );
};

export default NewTask;
