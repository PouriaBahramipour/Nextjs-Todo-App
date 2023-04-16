import TaskItemLists from "./TaskItemLists";
import classes from "./TaskItems.module.scss";

const TaskItems = (props) => {
  return (
    <ul className={classes.taskItem}>
      <TaskItemLists key={props.id} name={props.name} />
    </ul>
  );
};
export default TaskItems;
