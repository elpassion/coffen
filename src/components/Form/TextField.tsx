import { rem } from "polished";
import React from "react";
import { Field } from "react-final-form";
import styled from "styled-components";
import { colorName, font, size } from "styles";

interface TextFieldProps {
  name: string;
  label: string;
  initialValue?: string;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: ${rem(size.defaultPadding)};
  }
`;

const StyledField = styled(Field)`
  background: ${colorName.beige};
  box-shadow: inset ${rem(4)} ${rem(2)} ${rem(12)} rgba(191, 176, 136, 0.54),
    inset ${rem(-4)} ${rem(-2)} ${rem(8)} ${colorName.beige};
  border-radius: ${rem(8)};
  border: none;
  padding: ${rem(size.smallPadding)};
  outline: none;
`;

const Label = styled.label`
  font-size: ${rem(font.size.small)};

  & + ${StyledField} {
    margin-top: ${rem(size.smallPadding)};
  }
`;

export const TextField: React.FC<TextFieldProps> = ({ name, label, initialValue }) => (
  <Wrapper>
    <Label htmlFor={name}>{label}</Label>
    <StyledField id={name} name={name} component="input" initialValue={initialValue} type="text" />
  </Wrapper>
);
