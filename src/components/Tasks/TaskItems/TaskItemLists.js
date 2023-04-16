import classes from "./TaskItemLists.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

const TaskItemList = (props) => {
  return (
    <Fragment>
      <li className={classes.taskListItem}>
        <div className={classes.taskItem}>
          <div className={classes.taskTitle}>
            <input type="checkbox" className={classes.checkbox} />
            <p>{props.name}</p>
          </div>
          <div className={classes.taskRemove}>
            <FontAwesomeIcon
              icon={faTrashCan}
              className={classes.icon}
              size="1x"
            />
          </div>
          <div className={classes.taskCategory}>
            <p className={classes.categoryStyle}>{props.name}</p>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default TaskItemList;
