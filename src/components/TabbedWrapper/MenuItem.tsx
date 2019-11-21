import React, { ReactNode } from "react";

import { NavigationLink, IconWrapper, MenuLabel } from "./style";

interface MenuItemProps {
  label: string;
  to: string;
  icon: ReactNode;
  exact: boolean;
}

export const MenuItem: React.FC<MenuItemProps> = ({ label, to, icon, exact }) => {
  return (
    <NavigationLink exact={exact} to={to} activeClassName="isActive">
      <IconWrapper>{icon}</IconWrapper>

      <MenuLabel>{label}</MenuLabel>
    </NavigationLink>
  );
};
