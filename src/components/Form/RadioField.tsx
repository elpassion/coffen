import { rem, rgba } from "polished";
import React from "react";
import { Field } from "react-final-form";
import styled from "styled-components";
import { colorName, font } from "styles";

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
        font-size: ${rem(font.size.small)};
        margin-top: ${rem(8)};
      }
    }
  }

  input {
    position: absolute;
    left: -10000000px;
  }

  input:checked + label {
    border: 1px solid ${colorName.red};
  }

  input:focus + label {
    border: 1px solid ${colorName.orange};
  }
`;

export const RadioFieldOption: React.FC<{ value: string; name: string; icon: React.ReactNode }> = ({
  value,
  name,
  icon
}) => {
  return (
    <RadioInput>
      <Field id={`${name}-${value}`} name={name} component="input" type="radio" value={value} />
      <label htmlFor={`${name}-${value}`}>
        {icon}
        <span>{value}</span>
      </label>
    </RadioInput>
  );
};
