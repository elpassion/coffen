import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { GlobalStyle } from "styles";
import { initStore } from "stores/initStore";
import * as serviceWorker from "./serviceWorker";

const render = () => {
  const { App } = require("containers/App");
  console.log(App);
  ReactDOM.render(
    <Provider store={initStore}>
      <GlobalStyle />
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

render();

serviceWorker.unregister();

// @ts-ignore
if (process.env.NODE_ENV === "development" && module.hot) {
  //@ts-ignore
  module.hot.accept("containers/App", render);
}
