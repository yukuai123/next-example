import "../styles/global.css";
import { Provider, useLocalObservable } from "mobx-react";
import initStoreFn from "../stores";

export default function App({ Component, pageProps }) {
  const rootStore = useLocalObservable(initStoreFn);
  return (
    <Provider {...rootStore}>
      <Component {...pageProps} />
    </Provider>
  );
}
