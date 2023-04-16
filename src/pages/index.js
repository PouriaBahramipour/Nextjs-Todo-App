// import Home from "../components/Home/Home";
import Tasks from "../components/Tasks/Tasks";
import { supabase } from "@/src/lib/supabaseClient";
import { useDispatch, useSelector } from "react-redux";
import { todoActions } from "../store";

export async function getStaticProps() {
  let { data } = await supabase.from("todo").select();

  return {
    props: {
      todoItem: data,
    },
  };
}
const HomePage = ({ todoItem }) => {
  const dispatch = useDispatch();

  let LoadedItem = [];

  for (let key in todoItem) {
    LoadedItem.push({
      id: key,
      title: todoItem[key].title,
      category: todoItem[key].category,
    });
  }

  dispatch(todoActions.setTodoData(LoadedItem));
  return <Tasks />;
};

export default HomePage;
