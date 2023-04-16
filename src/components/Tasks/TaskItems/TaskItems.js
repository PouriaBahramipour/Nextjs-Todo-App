import { useSelector } from "react-redux";
import TaskItemLists from "./TaskItemLists";
import classes from "./TaskItems.module.scss";

const TaskItems = () => {
  const todoItems = useSelector((state) => state.todo.todoData);
  const tasksList = todoItems.map((task) => (
    <TaskItemLists id={task.id} title={task.title} category={task.category} />
  ));
  return <ul className={classes.taskItem}>{tasksList}</ul>;
};
export default TaskItems;
