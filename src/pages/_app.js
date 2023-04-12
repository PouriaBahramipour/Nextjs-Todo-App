import Card from "../components/UI/Card";
import "src/styles/globals.scss";

export default function App({ Component, pageProps }) {
  return (
    <Card>
      <Component {...pageProps} />
    </Card>
  );
}
