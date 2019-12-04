import React, { createContext, useContext } from "react";
import { Field } from "react-final-form";
import styled from "styled-components";

export const RadioInput = styled.div`
  input {
    position: absolute;
    left: -10000000px;
  }
`;

export const RadioFieldContext = createContext<{ name: string; value: string }>({} as any);

export const useRadioFieldContext = () => useContext(RadioFieldContext);

export const RadioFieldOption: React.FC<{
  value: string;
  name: string;
  label: React.ReactNode;
  className?: string;
}> = ({ value, name, label, className }) => {
  return (
    <RadioFieldContext.Provider value={{ name, value }}>
      <RadioInput className={className}>
        <Field id={`${name}-${value}`} name={name} component="input" type="radio" value={value} />
        {label}
      </RadioInput>
    </RadioFieldContext.Provider>
  );
};
