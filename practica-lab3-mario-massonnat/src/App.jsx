import { useState } from "react";
import "./App.css";
import NewTask from "./components/newTask/NewTask";
import TasksList from "./components/tasksList/TasksList";

function App() {
  const [tasks, setTasks] = useState([]);

  const handleNewTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, { id: Date.now(), name: newTask }]);
  };

  const handleDeleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <>
      <h1>Tasks</h1>
      <NewTask addNewTask={handleNewTask} />
      <TasksList tasks={tasks} onDelete={handleDeleteTask} />
    </>
  );
}

export default App;
