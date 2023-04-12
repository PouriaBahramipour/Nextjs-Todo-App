import { Fragment } from "react";
import classes from "./TaskSearch.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const TaskSearch = () => {
  return (
    <Fragment>
      <input
        className={classes["search-input"]}
        type="text"
        placeholder="Search Something..."
      ></input>
      <FontAwesomeIcon className={classes["search-icon"]} icon={faSearch} />
    </Fragment>
  );
};

export default TaskSearch;
