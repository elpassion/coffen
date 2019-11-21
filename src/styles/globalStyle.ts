import styledNormalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import { rem } from "polished";

import { colorName, font } from "styles";

export const GlobalStyle = createGlobalStyle`
 ${styledNormalize}
 
 body,
 html {
  margin: 0;
  padding: 0;
  font-weight: ${font.weight.regular};
  font-size: ${rem(font.size.normal)};
  font-family: ${font.primary};
  color: ${colorName.gray};
  background: ${colorName.beige};
 }
 
 * {
  box-sizing: border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  &:before,
  &:after {
    box-sizing: border-box;
  }
 }
 
 button,
 input {
  font-family: inherit;
 }
`;
