import styled from "styled-components";
import { rem, rgba } from "polished";

import { colorName, size } from "styles";

const TABBAR_SAFE_AREA = size.tabBarHeight - size.defaultPadding / 2;

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
  width: 100vw;
  height: ${rem(size.tabBarHeight)};
  background: ${colorName.beige};
  box-shadow: ${rem(4)} ${rem(2)} ${rem(16)} ${rgba(colorName.shadows, 0.2)};
  z-index: 10;
`;
