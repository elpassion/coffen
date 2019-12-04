import { ExpandedTechnique, GrindDetails, WaterDetails } from "components/BrewCard/style";
import { RadioFieldOption, useRadioFieldContext } from "components/Form/RadioField";
import { rem, rgba } from "polished";
import React from "react";
import styled from "styled-components";
import { colorName, size } from "styles";
import { GrindSize } from "../options";

export const TechniqueField = styled.div``;

export const TechniqueFieldOption = styled(RadioFieldOption)`
  input:focus + label {
    border: 1px solid ${colorName.orange};
  }

  & + & {
    margin-top: ${rem(size.defaultPadding)};
  }
`;

const Label = styled.label`
  display: block;
  padding: ${rem(size.defaultPadding)};
  box-shadow: ${rem(4)} ${rem(2)} ${rem(16)} ${rgba(colorName.shadows, 0.55)},
    ${rem(-4)} ${rem(-2)} ${rem(16)} ${colorName.white};
  border-radius: ${rem(size.borderRadius / 1.5)};
  border: 1px solid transparent;
`;

export const TechniqueFieldLabel = () => {
  const { name, value } = useRadioFieldContext();
  return (
    <Label htmlFor={`${name}-${value}`}>
      <ExpandedTechnique title="Technique name">v60</ExpandedTechnique>
      <GrindDetails coffeeWeight="20.5" grindSize={GrindSize.Medium} />
      <WaterDetails waterTemperature="95" waterDose="300" />
    </Label>
  );
};
