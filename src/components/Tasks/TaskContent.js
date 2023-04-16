import classes from "./TaskContent.module.scss";
import TaskFooter from "./TaskFooter/TaskFooter";
import TaskHeader from "./TaskHeader/TaskHeader";
import TaskItems from "./TaskItems/TaskItems";

const TaskContent = (props) => {
  return (
    <div className={classes["task-content"]}>
      <TaskHeader />
      <TaskItems key={props.id} title={props.title} category={props.category} />
      <TaskFooter />
    </div>
  );
};

export default TaskContent;
