import React from "react";
import { Routing } from "utils/routing";

import { FeedIcon } from "components/Svg/FeedIcon";
import { TechniqueIcon } from "components/Svg/TechniqueIcon";
import { FavoriteIcon } from "components/Svg/FavoriteIcon";
import { SettingsIcon } from "components/Svg/SettingsIcon";
import { MugIcon } from "components/Svg/MugIcon";
import { MenuItem } from "./MenuItem";

import { TabBarWrapper, NavItemWrapper, BrewButton } from "./style";

export const TabBar: React.FC = () => {
  return (
    <TabBarWrapper>
      <NavItemWrapper>
        <MenuItem exact to={Routing.Feed} label="Feed" icon={<FeedIcon />} />
        <MenuItem exact to={Routing.Brew} label="Technique" icon={<TechniqueIcon />} />
      </NavItemWrapper>

      <NavItemWrapper>
        <MenuItem exact to={Routing.Brew} label="Favorite" icon={<FavoriteIcon />} />
        <MenuItem exact to={Routing.Brew} label="Settings" icon={<SettingsIcon />} />
      </NavItemWrapper>

      <BrewButton title="Add new brew" to={Routing.Brew}>
        <MugIcon />
      </BrewButton>
    </TabBarWrapper>
  );
};
