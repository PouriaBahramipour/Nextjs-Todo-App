import TaskItemLists from "./TaskItemLists";
import classes from "./TaskItems.module.scss";

const TaskItems = () => {
  return (
    <ul className={classes.taskItem}>
      <TaskItemLists />
    </ul>
  );
};
export default TaskItems;
