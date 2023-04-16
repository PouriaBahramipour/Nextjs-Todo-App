import { useState } from "react";
import classes from "./TaskItemLists.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { Fragment } from "react";

const TaskItemList = (props) => {
  const [isCheckedChechBox, setIsCheckedChechBox] = useState(false);

  const titleStyleTaskDone = isCheckedChechBox ? classes.lineThrough : "";
  const categoryStyleTaskDone = isCheckedChechBox
    ? classes.categoryDoneStyle
    : classes.categoryStyle;

  const handleCheckBox = () => {
    setIsCheckedChechBox(!isCheckedChechBox);
  };

  return (
    <li key={props.id} className={classes.taskListItem}>
      <div className={classes.taskItem}>
        <div className={classes.taskTitle}>
          <input
            type="checkbox"
            className={classes.checkbox}
            onChange={handleCheckBox}
          />
          <p className={titleStyleTaskDone}>{props.title}</p>
        </div>
        <div className={classes.taskRemove}>
          <FontAwesomeIcon
            icon={faTrashCan}
            className={classes.icon}
            size="1x"
          />
        </div>
        <div className={classes.taskCategory}>
          <p className={categoryStyleTaskDone}>{props.category}</p>
        </div>
      </div>
    </li>
  );
};

export default TaskItemList;
