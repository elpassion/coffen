import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";

import { GlobalStyle } from "styles";
import * as serviceWorker from "./serviceWorker";
import { ApiContext, ApiClient } from "api/api";

WebFont.load({
  google: {
    families: ["Oswald:400,600", "Lato:400,700"]
  }
});

const render = () => {
  const { App } = require("containers/App");

  ReactDOM.render(
    <>
      <GlobalStyle />
      <ApiContext.Provider value={new ApiClient()}>
        <App />
      </ApiContext.Provider>
    </>,
    document.getElementById("root")
  );
};

render();

serviceWorker.unregister();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("containers/App", render);
}
