import styled from "styled-components";
import { rem, rgba } from "polished";
import { colorName } from "styles";
import { BrewingProcess } from "containers/Brew/options";
import React from "react";
import { Field } from "react-final-form";
import { CupIcon } from "components/Svg/CupIcon";

export const RadioField = styled.div<{ title: string }>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const RadioInput = styled.div`
  width: calc(25% - 4px);
  label {
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
        margin-bottom: ${rem(8)};
      }
    }
  }

  input {
    visibility: hidden;
  }

  input:checked + label {
    border: 1px solid ${colorName.red};
  }
`;

export const RadioFieldOption: React.FC<{ value: string }> = ({ value }) => {
  return (
    <RadioInput>
      <Field id={`technique-${value}`} name="technique" component="input" type="radio" value={value} />
      <label htmlFor={`technique-${value}`}>
        <CupIcon />
        <span>{value}</span>
      </label>
    </RadioInput>
  );
};
