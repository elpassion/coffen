import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import WebFont from "webfontloader";

import { GlobalStyle } from "styles";
import { initStore } from "stores/initStore";
import * as serviceWorker from "./serviceWorker";

WebFont.load({
  google: {
    families: ["Oswald:400,600", "Lato:400,700"]
  }
});

const render = () => {
  const { App } = require("containers/App");

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

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("containers/App", render);
}
