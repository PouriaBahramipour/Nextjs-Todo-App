import classes from "./TaskMenu.module.scss";

const TaskMenu = () => {
  return (
    <div className={classes["menu-bar"]}>
      <ul>
        <li>all</li>
        <li>payment</li>
        <li>college</li>
      </ul>
    </div>
  );
};

export default TaskMenu;
