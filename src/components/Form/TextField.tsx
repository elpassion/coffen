import React from "react";
import { Field } from "react-final-form";

interface TextFieldProps {
  name: string;
}

export const TextField: React.FC<TextFieldProps> = ({ name }) => (
  <Field
    name={name}
    render={({ input }) => (
      <>
        <label htmlFor="coffeeInput">Coffee name</label>
        <input {...input} id="coffeeInput" type="text" />
      </>
    )}
  />
);
