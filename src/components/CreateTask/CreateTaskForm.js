import { useRouter } from "next/router";
import { useState } from "react";
import Button from "../UI/Button";
import classes from "./CreateTaskForm.module.scss";

const isEmpty = (value) => {
  return value.trim() === "";
};

const CreateTaskForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");
  const [formInputsValidity, setFormInputsValidity] = useState({
    title: true,
  });

  const router = useRouter();

  const showHomePageHandler = () => {
    router.push("/");
  };

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredNewCategory = enteredCategory
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");

    const enteredTitleIsValid = !isEmpty(enteredTitle);
    const enteredCategoryIsEmpty = isEmpty(enteredCategory);

    if (!enteredTitleIsValid) {
      setFormInputsValidity({
        title: enteredTitleIsValid,
      });
    } else if (enteredTitleIsValid && enteredCategoryIsEmpty) {
      setFormInputsValidity({
        title: enteredTitleIsValid,
      });
      props.onConfirm({
        title: enteredTitle,
        category: "Uncategorized",
      });
      setEnteredTitle("");
      setEnteredCategory("");
    } else if (enteredTitleIsValid) {
      setFormInputsValidity({
        title: enteredTitleIsValid,
      });
      props.onConfirm({
        title: enteredTitle,
        category: enteredNewCategory,
      });
      setEnteredTitle("");
      setEnteredCategory("");
    }
  };

  const changeTitleHandler = (enteredTitle) => {
    setEnteredTitle(enteredTitle.target.value);
  };

  const changeCategoryHandler = (enteredCategory) => {
    setEnteredCategory(enteredCategory.target.value);
  };

  const titleValidationClass = formInputsValidity.title
    ? classes["title-input"]
    : `${classes.invalid} ${classes["title-input"]}`;

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={titleValidationClass}>
        <label htmlFor="title">Title</label>
        <input id="title" onChange={changeTitleHandler} />
        {!formInputsValidity.title && <p>Please Enter a Valid Title!</p>}
      </div>
      <div className={classes["category-input"]}>
        <label htmlFor="cateogry">Cateogry</label>
        <input id="cateogry" onChange={changeCategoryHandler} />
      </div>
      <div className={classes.actions}>
        <Button onClick={showHomePageHandler} className={classes.cancelButton}>
          Cancel
        </Button>
        <Button className={classes.submitButton} type="submit">
          Create
        </Button>
      </div>
    </form>
  );
};

export default CreateTaskForm;
