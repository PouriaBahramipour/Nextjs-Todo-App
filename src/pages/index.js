// import Home from "../components/Home/Home";
import Tasks from "../components/Tasks/Tasks";
import { supabase } from "@/src/lib/supabaseClient";

export async function getStaticProps() {
  let { data } = await supabase.from("countries").select("*");

  return {
    props: {
      countries: data,
    },
  };
}
const HomePage = ({ countries }) => {
  let LoadedItem = [];
  for (let key in countries) {
    LoadedItem.push({
      id: key,
      name: countries[key].name,
    });
  }
  console.log(LoadedItem);
  return (
    // <ul>
    //   {countries.map((country) => (
    //     <li key={country.id}>{country.name}</li>
    //   ))}
    // </ul>
    <Tasks key={LoadedItem[1].id} name={LoadedItem[1].name} />
  );
};

export default HomePage;
