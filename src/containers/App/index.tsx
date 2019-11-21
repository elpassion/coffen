import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Routing } from "utils/routing";
import { Feed } from "containers/Feed";
import { Brew } from "containers/Brew";

export const App = () => {
  return (
    <Router>
      <Route path={Routing.Feed} exact component={Feed} />
      <Route path={Routing.Brew} exact component={Brew} />
    </Router>
  );
};
