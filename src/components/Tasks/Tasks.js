import Card from "../UI/Card";
import TaskContent from "./TaskContent";
import TaskMenu from "./TaskMenu/TaskMenu";
import classes from "./Tasks.module.scss";

const Tasks = () => {
  return (
    <Card>
      <div className={classes["task-items"]}>
        <TaskMenu />
        <TaskContent />
      </div>
    </Card>
  );
};

export default Tasks;
