import React from "react";

import { PageHeader } from "./style";

export const PageTitle: React.FC = ({ children }) => {
  return <PageHeader>{children}</PageHeader>;
};
