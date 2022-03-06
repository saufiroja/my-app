import { Provider } from "react-redux";
import { store } from "../redux";
import "../styles/globals.css";
import 'video-react/dist/video-react.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
