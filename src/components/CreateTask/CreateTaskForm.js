import Button from "../UI/Button";
import classes from "./CreateTaskForm.module.scss";

const CreateTaskForm = () => {
  return (
    <form className={classes.form}>
      <div className={classes["title-input"]}>
        <label htmlFor="title">Title</label>
        <input id="title" />
      </div>
      <div className={classes["category-input"]}>
        <label htmlFor="cateogry">Cateogry</label>
        <input id="cateogry" />
      </div>
      <div className={classes.actions}>
        <Button className={classes.cancelButton}>Cancel</Button>
        <Button className={classes.submitButton}>Create</Button>
      </div>
    </form>
  );
};

export default CreateTaskForm;