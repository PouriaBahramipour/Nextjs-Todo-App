// import Home from "../components/Home/Home";
import Tasks from "../components/Tasks/Tasks";
import { supabase } from "@/src/lib/supabaseClient";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store";
import LoadingPage from "../components/Loading/LoadingPage";
import { Fragment, useEffect } from "react";
import Home from "../components/Home/Home";

export async function getServerSideProps() {
  let { data } = await supabase.from("todo").select();

  return {
    props: {
      todoItem: data,
    },
  };
}
const HomePage = ({ todoItem }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    let LoadedItem = [];

    for (let key in todoItem) {
      LoadedItem.push({
        id: todoItem[key].id,
        title: todoItem[key].title,
        category: todoItem[key].category,
      });
    }

    dispatch(todoActions.setTodoData(LoadedItem));
  }, [dispatch]);

  const todoData = useSelector((state) => state.todo.todoData);

  const isLoading = useSelector((state) => state.todo.isLoading);

  const hasItemState = todoData.length > 0;

  return (
    <Fragment>
      {isLoading && <LoadingPage />}
      {!isLoading && !hasItemState && <Home />}
      {!isLoading && hasItemState && <Tasks />}
      {/* <Tasks /> */}
    </Fragment>
  );
};

export default HomePage;
