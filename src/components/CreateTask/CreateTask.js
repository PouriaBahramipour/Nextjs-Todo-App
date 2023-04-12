import Card from "../UI/Card";
import Link from "next/link";
import classes from "./CreateTask.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CreateTaskForm from "./CreateTaskForm";

const CreateTask = () => {
  return (
    <Card>
      <header className={classes.header}>
        <Link href="/">
          <FontAwesomeIcon icon={faArrowLeft} size="1x" />
        </Link>
        <h2>Create New Task</h2>
      </header>
      <CreateTaskForm />
    </Card>
  );
};

export default CreateTask;
