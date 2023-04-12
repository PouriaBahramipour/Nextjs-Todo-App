import Link from "next/link";
import classes from "./TaskFooter.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";

const TaskFooter = () => {
  return (
    <div className={classes["new-task-icon"]}>
      <Link href="/new-task">
        <FontAwesomeIcon
          icon={faCirclePlus}
          className={classes["circle-plus"]}
          size="3x"
          color="#1b91fb"
        />
      </Link>
    </div>
  );
};

export default TaskFooter;
