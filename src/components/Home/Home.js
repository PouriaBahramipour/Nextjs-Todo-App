import HomeImage from "./HomeImage";
import classes from "./Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const Home = () => {
  return (
    <div className={classes.home}>
      <div>
        <HomeImage />
      </div>
      <div className={classes.title}>
        <p>There’s no task here!</p>
      </div>
      <div className={classes["new-task-link"]}>
        <FontAwesomeIcon
          className={classes.plusIcon}
          icon={faPlus}
          size="1x"
          color="#1B91FB"
        />
        <Link href="/new-task">Create new task</Link>
      </div>
    </div>
  );
};

export default Home;
