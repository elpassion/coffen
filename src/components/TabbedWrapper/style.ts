import styled from "styled-components";
import { rem, rgba } from "polished";
import { Link, NavLink } from "react-router-dom";

import { colorName, size, font } from "styles";

const TABBAR_SAFE_AREA = size.tabBarHeight - size.defaultPadding / 2;
const ICON_SIZE = 24;
const BREW_BUTTON_SIZE = 54;
const BREW_ICON_SIZE = 28;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  max-height: 99vh;
`;

export const View = styled.main`
  position: relative;
  flex: 1 1 auto;
  padding: 0 0 ${rem(TABBAR_SAFE_AREA)};
  z-index: 1;
`;

export const TabBarWrapper = styled.nav`
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 ${rem(size.defaultPadding)};
  width: 100vw;
  height: ${rem(size.tabBarHeight)};
  background: ${colorName.beige};
  box-shadow: ${rem(4)} ${rem(2)} ${rem(16)} ${rgba(colorName.shadows, 0.2)};
  z-index: 10;
`;

export const NavItemWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 0 0 35%;
`;

export const BrewButton = styled(Link)`
  position: absolute;
  bottom: ${rem(20)};
  left: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${rem(BREW_BUTTON_SIZE)};
  height: ${rem(BREW_BUTTON_SIZE)};
  border-radius: ${rem(size.borderRadius)};
  background: ${colorName.orange};
  transform: translate(-50%, 0);

  & > svg {
    display: block;
    width: ${rem(BREW_ICON_SIZE)};
    height: ${rem(BREW_ICON_SIZE)};
  }
`;

export const NavigationLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${colorName.lightGray};
  flex: 0 0 ${rem(ICON_SIZE * 2)};
  text-decoration: none;

  &.isActive {
    color: ${colorName.red};
  }
`;

export const IconWrapper = styled.div`
  width: ${rem(ICON_SIZE)};

  & > svg {
    display: block;
    width: ${rem(ICON_SIZE)};
    height: ${rem(ICON_SIZE)};
  }
`;

export const MenuLabel = styled.span`
  font-size: ${rem(font.size.tiny)};
  transition: color 2s ease-in;
`;
