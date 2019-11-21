import { TextField } from "components/Form/TextField";
import React, { useState } from "react";
import { Form } from "react-final-form";

export const Brew = () => {
  const [isAddingNewBrew, setIsAddingNewBrew] = useState(false);
  return isAddingNewBrew ? (
    <>
      <h1>New brew</h1>
      <Form<{ coffee: string }>
        onSubmit={() => {}}
        validate={values => {
          const errors: Partial<typeof values> = {};
          if (!values.coffee) errors.coffee = "Required";
          return errors;
        }}
        render={({ submitting, valid }) => (
          <>
            <TextField name="coffee" />
            <button type="submit" title="Rate" disabled={submitting || !valid}>
              💯
            </button>
          </>
        )}
      />
    </>
  ) : (
    <button title="Add new brew" onClick={() => setIsAddingNewBrew(true)}>
      +
    </button>
  );
};
