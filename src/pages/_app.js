import { Provider } from "react-redux";
import Card from "../components/UI/Card";
import "src/styles/globals.scss";
import store from "../store";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Card>
        <Component {...pageProps} />
      </Card>
    </Provider>
  );
}
