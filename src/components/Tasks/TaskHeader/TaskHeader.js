import classes from "./TaskHeader.module.scss";

import TaskSearch from "./TaskSearch";

const TaskHeader = () => {
  return (
    <header className={classes["task-header"]}>
      <h2>All Tasks</h2>
      <TaskSearch />
    </header>
  );
};

export default TaskHeader;
