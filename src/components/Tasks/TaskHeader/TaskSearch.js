import { Fragment } from "react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "@/src/store";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./TaskSearch.module.scss";

const TaskSearch = () => {
  const dispatch = useDispatch();
  const [enteredTitle, setEnteredTitle] = useState("");
  const clickedMenuItem = useSelector((state) => state.todo.clickedMenuItem);

  useEffect(() => {
    setEnteredTitle("");
  }, [clickedMenuItem]);

  const searchHandle = (title) => {
    setEnteredTitle(title.target.value);
    dispatch(todoActions.setSearchText(title.target.value));
  };

  return (
    <Fragment>
      <input
        className={classes["search-input"]}
        type="text"
        placeholder="Search Something..."
        value={enteredTitle}
        onChange={searchHandle}
      ></input>
      <FontAwesomeIcon className={classes["search-icon"]} icon={faSearch} />
    </Fragment>
  );
};

export default TaskSearch;
