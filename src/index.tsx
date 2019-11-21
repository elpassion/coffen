import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { initStore } from "stores/initStore";

import App from "containers/App";

import { GlobalStyle } from "styles";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={initStore}>
    <GlobalStyle />
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
