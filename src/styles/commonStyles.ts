import styled, { css, keyframes } from "styled-components";
import { rem } from "polished";

import { size, font } from "styles";

// Motion
export const appearFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20%);
  }
  
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Shared styles
export const OswaldType = css`
  font-family: ${font.secondary};
`;

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${rem(size.defaultPadding)};
`;

export const LoaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${rem(160)};
`;
