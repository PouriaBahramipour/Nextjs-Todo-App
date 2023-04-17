import { Fragment } from "react";
import classes from "./LoadingPage.module.scss";

const LoadingPage = () => {
  return (
    <Fragment>
      <div className={classes.loading}>
        <div className={classes.loader}></div>
      </div>
    </Fragment>
  );
};

export default LoadingPage;
