import classes from "./TaskContent.module.scss";
import TaskFooter from "./TaskFooter/TaskFooter";
import TaskHeader from "./TaskHeader/TaskHeader";
import TaskItems from "./TaskItems/TaskItems";

const TaskContent = () => {
  return (
    <div className={classes["task-content"]}>
      <TaskHeader />
      <TaskItems />
      <TaskFooter />
    </div>
  );
};

export default TaskContent;
