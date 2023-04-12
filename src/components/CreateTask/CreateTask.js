import Link from "next/link";
import classes from "./CreateTask.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CreateTaskForm from "./CreateTaskForm";
import { Fragment } from "react";

const CreateTask = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <Link href="/">
          <FontAwesomeIcon icon={faArrowLeft} size="1x" />
        </Link>
        <h2>Create New Task</h2>
      </header>
      <CreateTaskForm />
    </Fragment>
  );
};

export default CreateTask;
