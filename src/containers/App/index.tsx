import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { routing } from "utils/routing";
import { Feed } from "containers/Feed";

export const App = () => {
  return (
    <Router>
      <Route path={routing.FEED} exact component={Feed} />
    </Router>
  );
};
