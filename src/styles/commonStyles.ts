import styled from "styled-components";
import { rem } from "polished";

import { size } from "styles";

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: ${rem(size.defaultPadding)};
`;
