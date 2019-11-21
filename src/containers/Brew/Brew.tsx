import { TextField } from "components/Form/TextField";
import { SelectField, SelectFieldOption } from "components/Form/SelectField";
import React, { useState } from "react";
import { Form } from "react-final-form";
import { SubmitButton } from "components/Form/SubmitButton";

export enum BrewingTechnique {
  Drip = "Drip"
}

export interface BrewingFormValues {
  coffee: string;
  technique: BrewingTechnique;
}

export const Brew = () => {
  const [isAddingNewBrew, setIsAddingNewBrew] = useState(false);
  return isAddingNewBrew ? (
    <>
      <h1>New brew</h1>
      <Form<BrewingFormValues>
        onSubmit={() => {}}
        validate={values => {
          const errors: {
            [K in keyof BrewingFormValues]?: string | undefined;
          } = {};
          if (!values.coffee) errors.coffee = "Required";
          if (!values.technique) errors.technique = "Required";
          return errors;
        }}
        render={({ submitting, valid }) => (
          <>
            <TextField name="coffee" label="Coffee name" />
            <SelectField
              name="technique"
              label="Technique"
              initialValue={BrewingTechnique.Drip}
            >
              <SelectFieldOption value={BrewingTechnique.Drip}>
                {BrewingTechnique.Drip}
              </SelectFieldOption>
            </SelectField>
            <SubmitButton title="Rate">Rate</SubmitButton>
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
