import { RadioFieldOption, useRadioFieldContext } from "components/Form/RadioField";
import { rem, rgba } from "polished";
import React from "react";
import styled from "styled-components";
import { colorName, font } from "styles";

const Label = styled.label`
  display: block;
  width: 100%;
  box-shadow: ${rem(4)} ${rem(2)} ${rem(16)} ${rgba(colorName.shadows, 0.55)},
    ${rem(-4)} ${rem(-2)} ${rem(16)} ${colorName.white};
  border: 1px solid transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: ${rem(8)};
  text-align: center;
  padding: ${rem(8)} 0;

  & > svg {
    display: block;
    width: ${rem(24)};
    height: ${rem(24)};

    & + span {
      font-size: ${rem(font.size.small)};
      margin-top: ${rem(8)};
    }
  }
`;

export const MethodField = styled.div<{ title: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const MethodFieldLabel: React.FC<{ icon: React.ReactNode }> = ({ icon }) => {
  const { name, value } = useRadioFieldContext();
  return (
    <Label htmlFor={`${name}-${value}`}>
      {icon}
      <span>{value}</span>
    </Label>
  );
};

export const MethodFieldOption = styled(RadioFieldOption)`
  width: calc(25% - 4px);
  input:checked + label {
    border: 1px solid ${colorName.red};
  }

  input:focus + label {
    border: 1px solid ${colorName.orange};
  }
`;
