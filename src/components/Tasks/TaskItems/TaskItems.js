import { useSelector } from "react-redux";
import TaskItemLists from "./TaskItemLists";
import classes from "./TaskItems.module.scss";

const TaskItems = () => {
  const todoItems = useSelector((state) => state.todo.filteredData);

  const tasksList = todoItems.map((task, index) => (
    <li key={index}>
      <TaskItemLists id={task.id} title={task.title} category={task.category} />
    </li>
  ));

  return <ul className={classes.taskItem}>{tasksList}</ul>;
};
export default TaskItems;
