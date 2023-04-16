import TaskContent from "./TaskContent";
import TaskMenu from "./TaskMenu/TaskMenu";
import classes from "./Tasks.module.scss";

const Tasks = () => {
  return (
    <div className={classes["task-items"]}>
      <TaskMenu />
      <TaskContent />
    </div>
  );
};

export default Tasks;
