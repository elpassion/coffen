import React from "react";
import { Field } from "react-final-form";

interface TextFieldProps {
  name: string;
  label: string;
}

export const TextField: React.FC<TextFieldProps> = ({ name, label }) => (
  <>
    <label htmlFor={name}>{label}</label>
    <Field id={name} name={name} component="input" type="text" />
  </>
);
