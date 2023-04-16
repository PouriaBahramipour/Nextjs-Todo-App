import TaskContent from "./TaskContent";
import TaskMenu from "./TaskMenu/TaskMenu";
import classes from "./Tasks.module.scss";

const Tasks = (props) => {
  return (
    <div className={classes["task-items"]}>
      <TaskMenu />
      <TaskContent key={props.id} name={props.name} />
    </div>
  );
};

export default Tasks;
