import classes from "./TaskItemLists.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

const TaskItemList = () => {
  return (
    <Fragment>
      <li className={classes.taskListItem}>
        <div className={classes.taskItem}>
          <div className={classes.taskTitle}>
            <input type="checkbox" className={classes.checkbox} />
            <p>aa</p>
          </div>
          <div className={classes.taskRemove}>
            <FontAwesomeIcon
              icon={faTrashCan}
              className={classes.icon}
              size="1x"
            />
          </div>
          <div className={classes.taskCategory}>
            <p className={classes.categoryStyle}>bb</p>
          </div>
        </div>
      </li>

      <li className={classes.taskListItem}>
        <div className={classes.taskItem}>
          <div className={classes.taskTitle}>
            <input type="checkbox" className={classes.checkbox} />
            <p>aa</p>
          </div>
          <div className={classes.taskRemove}>
            <FontAwesomeIcon
              icon={faTrashCan}
              className={classes.icon}
              size="1x"
            />
          </div>
          <div className={classes.taskCategory}>
            <p className={classes.categoryStyle}>bb</p>
          </div>
        </div>
      </li>

      <li className={classes.taskListItem}>
        <div className={classes.taskItem}>
          <div className={classes.taskTitle}>
            <input type="checkbox" className={classes.checkbox} />
            <p>aa</p>
          </div>
          <div className={classes.taskRemove}>
            <FontAwesomeIcon
              icon={faTrashCan}
              className={classes.icon}
              size="1x"
            />
          </div>
          <div className={classes.taskCategory}>
            <p className={classes.categoryStyle}>bb</p>
          </div>
        </div>
      </li>

      <li className={classes.taskListItem}>
        <div className={classes.taskItem}>
          <div className={classes.taskTitle}>
            <input type="checkbox" className={classes.checkbox} />
            <p>aa</p>
          </div>
          <div className={classes.taskRemove}>
            <FontAwesomeIcon
              icon={faTrashCan}
              className={classes.icon}
              size="1x"
            />
          </div>
          <div className={classes.taskCategory}>
            <p className={classes.categoryStyle}>bb</p>
          </div>
        </div>
      </li>

      <li className={classes.taskListItem}>
        <div className={classes.taskItem}>
          <div className={classes.taskTitle}>
            <input type="checkbox" className={classes.checkbox} />
            <p>aa</p>
          </div>
          <div className={classes.taskRemove}>
            <FontAwesomeIcon
              icon={faTrashCan}
              className={classes.icon}
              size="1x"
            />
          </div>
          <div className={classes.taskCategory}>
            <p className={classes.categoryStyle}>bb</p>
          </div>
        </div>
      </li>

      <li className={classes.taskListItem}>
        <div className={classes.taskItem}>
          <div className={classes.taskTitle}>
            <input type="checkbox" className={classes.checkbox} />
            <p>aa</p>
          </div>
          <div className={classes.taskRemove}>
            <FontAwesomeIcon
              icon={faTrashCan}
              className={classes.icon}
              size="1x"
            />
          </div>
          <div className={classes.taskCategory}>
            <p className={classes.categoryStyle}>bb</p>
          </div>
        </div>
      </li>
      <li className={classes.taskListItem}>
        <div className={classes.taskItem}>
          <div className={classes.taskTitle}>
            <input type="checkbox" className={classes.checkbox} />
            <p>aa</p>
          </div>
          <div className={classes.taskRemove}>
            <FontAwesomeIcon
              icon={faTrashCan}
              className={classes.icon}
              size="1x"
            />
          </div>
          <div className={classes.taskCategory}>
            <p>bb</p>
          </div>
        </div>
      </li>
      <li className={classes.taskListItem}>
        <div className={classes.taskItem}>
          <div className={classes.taskTitle}>
            <input type="checkbox" className={classes.checkbox} />
            <p>aa</p>
          </div>
          <div className={classes.taskRemove}>
            <FontAwesomeIcon
              icon={faTrashCan}
              className={classes.icon}
              size="1x"
            />
          </div>
          <div className={classes.taskCategory}>
            <p>bb</p>
          </div>
        </div>
      </li>
    </Fragment>
  );
};

export default TaskItemList;
