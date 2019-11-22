import styled from "styled-components";
import { rem } from "polished";

import { colorName, font } from "styles";

export const BrewStepWrapper = styled.li`
  margin: 0 0 ${rem(16)};
`;

export const BrewStepIndicator = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 ${rem(12)};
  font-family: ${font.secondary};
`;

export const BrewStepCount = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 ${rem(8)} 0 0;
  width: ${rem(16)};
  height: ${rem(16)};
  color: ${colorName.white};
  background: ${colorName.red};
  font-size: ${rem(font.size.tiny)};
  font-weight: ${font.weight.bold};
  box-shadow: 1px 1px 4px rgba(191, 176, 136, 0.34), inset -1px -1px 3px rgba(12, 12, 12, 0.3),
    inset 2px 2px 4px rgba(255, 255, 255, 0.27);
  border-radius: 100%;
`;

export const BrewStepLabel = styled.span`
  color: ${colorName.gray};
  font-size: ${rem(font.size.normal)};
  font-weight: ${font.weight.semiBold};
  text-transform: uppercase;
`;

export const BrewStepsDetails = styled.div``;
