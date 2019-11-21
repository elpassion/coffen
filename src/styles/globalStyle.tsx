import styledNormalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 ${styledNormalize}
 
 body {
  margin: 0;
  padding: 0;
  
  &.Modal--open {
    overflow: hidden;
  }
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
