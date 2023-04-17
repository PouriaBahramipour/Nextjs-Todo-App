import { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { supabase } from "@/src/lib/supabaseClient";
import { todoActions } from "@/src/store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import classes from "./TaskItemLists.module.scss";

const TaskItemList = (props) => {
  const [isCheckedChechBox, setIsCheckedChechBox] = useState(false);
  const dispatch = useDispatch();
  const successNotify = (value) =>
    toast.success(value, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const warningNotify = (value) => {
    toast.error(value, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const titleStyleTaskDone = isCheckedChechBox ? classes.lineThrough : "";
  const categoryStyleTaskDone = isCheckedChechBox
    ? classes.categoryDoneStyle
    : classes.categoryStyle;

  const handleCheckBox = () => {
    setIsCheckedChechBox(!isCheckedChechBox);
  };

  const handlerDeleteTodoItem = async () => {
    const { data, error } = await supabase
      .from("todo")
      .delete()
      .eq("id", props.id);

    if (error) {
      // warningNotify("Error Delete task");
    } else {
      // successNotify("Removed successfully");

      let { data } = await supabase.from("todo").select();

      let LoadedItem = [];

      for (let key in data) {
        LoadedItem.push({
          id: data[key].id,
          title: data[key].title,
          category: data[key].category,
        });
      }

      dispatch(todoActions.setTodoData(LoadedItem));
    }
  };

  return (
    <Fragment>
      <ToastContainer />
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
            onClick={handlerDeleteTodoItem}
          />
        </div>
        <div className={classes.taskCategory}>
          <p className={categoryStyleTaskDone}>{props.category}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default TaskItemList;
