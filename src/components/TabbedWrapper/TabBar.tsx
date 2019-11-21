import React from "react";
import { Link } from "react-router-dom";

import { Routing } from "utils/routing";

import { TabBarWrapper } from "./style";

export const TabBar: React.FC = () => {
  return (
    <TabBarWrapper>
      <Link title="Add new brew" to={Routing.Brew}>
        Add new brew
      </Link>
    </TabBarWrapper>
  );
};
