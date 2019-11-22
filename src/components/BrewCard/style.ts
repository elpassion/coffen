import styled from "styled-components";
import { rem, rgba } from "polished";

import { colorName, size, font } from "styles";
import { OswaldType } from "styles/commonStyles";

const AVATAR_SIZE = 24;

export const Card = styled.li`
  margin: 0 0 ${rem(size.defaultPadding)};
  padding: ${rem(size.defaultPadding)};
  background: ${colorName.beige};
  border: 1px solid ${colorName.borders};
  border-radius: ${rem(size.borderRadius / 1.5)};
  box-shadow: ${rem(4)} ${rem(2)} ${rem(16)} ${rgba(colorName.shadows, 0.55)},
    ${rem(-4)} ${rem(-2)} ${rem(16)} ${colorName.white};
`;

export const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CoffeeOrigin = styled.span`
  ${OswaldType};

  font-weight: ${font.weight.semiBold};
  font-size: ${rem(font.size.normal)};
  text-transform: uppercase;
`;

export const CoffeeMeasures = styled.span`
  ${OswaldType};

  display: flex;
  align-items: center;
  font-size: ${rem(font.size.normal)};
  font-weight: ${font.weight.semiBold};
  line-height: 1;

  & > svg {
    display: block;
    margin: 0 ${rem(12)} 0 0;
    width: ${rem(19)};
    height: ${rem(14)};
  }
`;
export const CoffeeRoastery = styled.p`
  margin: ${rem(4)} 0 ${rem(10)};
  font-size: ${rem(font.size.small)};
`;

export const ExpandedDetails = styled.div`
  height: 0;
  overflow: hidden;
`;

export const MetaRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TechniqueAuthor = styled.span`
  display: flex;
  align-items: center;
  font-size: ${rem(font.size.small)};

  & > img {
    display: block;
    margin: 0 ${rem(8)} 0 0;
    width: ${rem(AVATAR_SIZE)};
    height: ${rem(AVATAR_SIZE)};
    border-radius: 100%;
  }
`;
