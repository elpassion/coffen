import { Main } from "main";
import React from "react";
import ReactDOM from "react-dom";
import WebFont from "webfontloader";
import * as serviceWorker from "./serviceWorker";

WebFont.load({
  google: {
    families: ["Oswald:400,600", "Lato:400,700"]
  }
});

const render = () => {
  ReactDOM.render(<Main />, document.getElementById("root"));
};

render();

serviceWorker.unregister();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("containers/App", render);
}
