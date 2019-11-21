import React from "react";
import { Field } from "react-final-form";

interface SelectFieldProps {
  name: string;
  label: string;
  initialValue?: string;
}

export const SelectField: React.FC<SelectFieldProps> = ({ name, label, initialValue, children }) => (
  <>
    <label htmlFor={name}>{label}</label>
    <Field id={name} name={name} component="select" initialValue={initialValue}>
      {children}
    </Field>
  </>
);

interface SelectFieldOptionProps {
  value: string;
}

export const SelectFieldOption: React.FC<SelectFieldOptionProps> = ({ value, children }) => (
  <option value={value}>{children}</option>
);
