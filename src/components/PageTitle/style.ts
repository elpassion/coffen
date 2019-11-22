import styled from "styled-components";
import { rem } from "polished";

import { size, font } from "styles";

export const PageHeader = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 0 ${rem(size.defaultPadding)};
  text-transform: uppercase;
  font-family: ${font.secondary};
  font-size: ${rem(font.size.medium)};
`;
