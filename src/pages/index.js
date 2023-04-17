// import Home from "../components/Home/Home";
import Tasks from "../components/Tasks/Tasks";
import { supabase } from "@/src/lib/supabaseClient";
import { useDispatch } from "react-redux";
import { todoActions } from "../store";

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

  let LoadedItem = [];

  for (let key in todoItem) {
    LoadedItem.push({
      id: todoItem[key].id,
      title: todoItem[key].title,
      category: todoItem[key].category,
    });
  }
  console.log(LoadedItem[0].id);

  dispatch(todoActions.setTodoData(LoadedItem));
  return <Tasks />;
};

export default HomePage;
