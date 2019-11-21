import React from "react";
import { Link } from "react-router-dom";
import { Routing } from "utils/routing";

export const Feed = () => {
  return (
    <div>
      <Link title="Add new brew" to={Routing.Brew}>
        +
      </Link>
    </div>
  );
};
