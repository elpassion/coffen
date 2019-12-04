import { CoffeGrainIcon } from "components/Svg/CoffeGrainIcon";
import { WaterDropIcon } from "components/Svg/WaterDropIcon";
import { GrindSize } from "containers/Brew/options";
import { rem, rgba } from "polished";
import React from "react";
import styled from "styled-components";
import { colorName, font, size, transitions } from "styles";
import { appearFromBottom, OswaldType } from "styles/commonStyles";

const AVATAR_SIZE = 24;

export const Card = styled.li<{ animationDelay: number }>`
  padding: ${rem(size.defaultPadding)};
  background: ${colorName.beige};
  border: 1px solid ${colorName.borders};
  border-radius: ${rem(size.borderRadius / 1.5)};
  box-shadow: ${rem(4)} ${rem(2)} ${rem(16)} ${rgba(colorName.shadows, 0.55)},
    ${rem(-4)} ${rem(-2)} ${rem(16)} ${colorName.white};
  opacity: 0;
  animation: ${appearFromBottom} 0.5s ${transitions.spring}
    ${({ animationDelay }) => (animationDelay ? `${animationDelay}s` : "0.5s")} forwards;

  & + & {
    margin-top: ${rem(size.defaultPadding)};
  }
`;

export const ClickableWrapper = styled.div`
  cursor: pointer;
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

export const CoffeeMeasures = styled.span<{ isExpanded: boolean }>`
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

  ${props =>
    props.isExpanded &&
    `
        font-family: ${font.primary};
      font-size: ${rem(font.size.small)};
      font-weight: ${font.weight.regular};
    `}
`;
export const CoffeeRoastery = styled.p`
  margin: ${rem(4)} 0 ${rem(10)};
  font-size: ${rem(font.size.small)};
`;

export const ExpandedDetails = styled.div<{ isExpanded: boolean }>`
  height: ${rem(1)};
  opacity: 0;
  overflow: hidden;
  transition: all 0.8s ${transitions.spring};

  ${props =>
    props.isExpanded &&
    `
        opacity: 1;
        height: ${rem(144)};
    `}
`;
export const ExpandedDate = styled.p`
  margin: 0;
  text-align: right;
  font-size: ${rem(font.size.small)};
  margin: 0;
`;

export const ExpandedActions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > button {
    flex: 0 0 48%;
  }

  & + ${ExpandedDate} {
    margin-top: ${rem(size.defaultPadding)};
  }
`;

export const ExpandedElement = styled.p`
  ${OswaldType};
  font-size: ${rem(font.size.normal)};
  margin: 0;
  display: flex;
  align-items: center;

  & > svg {
    display: block;
    margin: ${rem(2)} ${rem(8)} 0 0;
    width: ${rem(16)};
    height: ${rem(16)};
  }

  & + p {
    margin: ${rem(8)} 0 0;
  }

  & + ${ExpandedActions} {
    margin-top: ${rem(size.defaultPadding)};
  }
`;

export const ExpandedTechnique = styled(ExpandedElement)`
  font-weight: ${font.weight.semiBold};
`;

export const GrindDetails: React.FC<{ coffeeWeight: string; grindSize: GrindSize }> = ({ coffeeWeight, grindSize }) => (
  <ExpandedElement>
    <CoffeGrainIcon /> {coffeeWeight}g / {grindSize} grind
  </ExpandedElement>
);

export const WaterDetails: React.FC<{ waterDose: string; waterTemperature: string }> = ({
  waterDose,
  waterTemperature
}) => (
  <ExpandedElement>
    <WaterDropIcon /> {waterDose}ml / {waterTemperature}°C
  </ExpandedElement>
);

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
