import Link from "next/link";
import classes from "./CreateTask.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import CreateTaskForm from "./CreateTaskForm";
import { Fragment } from "react";
import { useDispatch } from "react-redux";
import { todoActions } from "@/src/store";
import { supabase } from "@/src/lib/supabaseClient";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateTask = () => {
  const dispatch = useDispatch();
  const router = useRouter();

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

  const submitCreateTaskHandler = async (newTodoItem) => {
    dispatch(todoActions.setLoading(true));
    try {
      const data = await supabase.from("todo").insert(newTodoItem);
      successNotify("Successfully Registered");
      setTimeout(() => {
        router.push("/");
      }, 1000);
    } catch (error) {
      dispatch(todoActions.setError(error.message));
      warningNotify(error.message);
    }
    dispatch(todoActions.setLoading(false));
  };

  return (
    <Fragment>
      <ToastContainer />
      <header className={classes.header}>
        <Link href="/">
          <FontAwesomeIcon icon={faArrowLeft} size="1x" />
        </Link>
        <h2>Create New Task</h2>
      </header>
      <CreateTaskForm onConfirm={submitCreateTaskHandler} />
    </Fragment>
  );
};

export default CreateTask;
