import React from "react";
import { Field } from "react-final-form";

interface TextFieldProps {
  name: string;
  label: string;
  initialValue: string;
}

export const TextField: React.FC<TextFieldProps> = ({ name, label, initialValue }) => (
  <>
    <label htmlFor={name}>{label}</label>
    <Field id={name} name={name} component="input" initialValue={initialValue} type="text" />
  </>
);
