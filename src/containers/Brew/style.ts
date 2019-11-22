import styled from "styled-components";
import { rem } from "polished";

import { size, font } from "styles";

export const StepsWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  counter-reset: section;
`;

export const BrewStep = styled.li`
  background: red;
  counter-increment: section;
  content: "Section " counter(section) ": ";
`;
