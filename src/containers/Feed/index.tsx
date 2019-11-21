import React from "react";
import { Link } from "react-router-dom";
import { Routing } from "utils/routing";

import { TabbedWrapper } from "components/TabbedWrapper";

export const Feed = () => {
  return (
    <TabbedWrapper>
      <div>
        <Link title="Add new brew" to={Routing.Brew}>
          +
        </Link>
      </div>
    </TabbedWrapper>
  );
};
