import classes from "./TaskContent.module.scss";
import TaskFooter from "./TaskFooter/TaskFooter";
import TaskHeader from "./TaskHeader/TaskHeader";
import TaskItems from "./TaskItems/TaskItems";

const TaskContent = (props) => {
  return (
    <div className={classes["task-content"]}>
      <TaskHeader />
      <TaskItems key={props.id} name={props.name} />
      <TaskFooter />
    </div>
  );
};

export default TaskContent;
