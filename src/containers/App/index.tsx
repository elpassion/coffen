import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import { Routing } from "utils/routing";

import { TabbedWrapper } from "components/TabbedWrapper";

import { Feed } from "containers/Feed";
import { Techniques } from "containers/Techniques";
import { Favorites } from "containers/Favorites";
import { Settings } from "containers/Settings";
import { Brew } from "containers/Brew";

export const App = () => {
  return (
    <Router>
      <TabbedWrapper>
        <Route path={Routing.Feed} exact component={Feed} />
        <Route path={Routing.Techniques} exact component={Techniques} />
        <Route path={Routing.Favorites} exact component={Favorites} />
        <Route path={Routing.Settings} exact component={Settings} />
        <Route path={Routing.Brew} exact component={Brew} />
      </TabbedWrapper>
    </Router>
  );
};
