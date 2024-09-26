import Task from "../task/Task";

const TasksList = ({ tasks, onDelete }) => {

  const handleDelete = (id) => {
    onDelete(id);
  }

  const tasksList = tasks.map((task) => (
    <Task key={task.id} task={task.name} deleteTask={() => handleDelete(task.id)}/>
  ));

  return <ul>{tasksList}</ul>;
};

export default TasksList;
