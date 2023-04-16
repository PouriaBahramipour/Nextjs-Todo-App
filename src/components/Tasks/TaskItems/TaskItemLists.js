import classes from "./TaskItemLists.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

const TaskItemList = (props) => {
  return (
    <li key={props.id} className={classes.taskListItem}>
      <div className={classes.taskItem}>
        <div className={classes.taskTitle}>
          <input type="checkbox" className={classes.checkbox} />
          <p>{props.title}</p>
        </div>
        <div className={classes.taskRemove}>
          <FontAwesomeIcon
            icon={faTrashCan}
            className={classes.icon}
            size="1x"
          />
        </div>
        <div className={classes.taskCategory}>
          <p className={classes.categoryStyle}>{props.category}</p>
        </div>
      </div>
    </li>
  );
};

export default TaskItemList;
