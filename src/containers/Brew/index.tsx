import { SelectField, SelectFieldOption } from "components/Form/SelectField";
import { SubmitButton } from "components/Form/SubmitButton";
import { TextField } from "components/Form/TextField";
import { ErrorsForValues } from "components/Form/types";
import React from "react";
import { Form } from "react-final-form";

export enum BrewingTechnique {
  Drip = "Drip"
}

export enum BrewingProcess {
  HarioV60 = "Hario v60"
}

export interface BrewingFormValues {
  coffee: string;
  technique: BrewingTechnique;
  process: BrewingProcess;
}

export const Brew = () => {
  return (
    <>
      <h1>New brew</h1>
      <Form<BrewingFormValues>
        onSubmit={() => {}}
        subscription={{}}
        validate={values => {
          const errors: ErrorsForValues<BrewingFormValues> = {};
          if (!values.coffee) errors.coffee = "Required";
          if (!values.technique) errors.technique = "Required";
          if (!values.process) errors.process = "Required";
          return errors;
        }}
        render={() => (
          <>
            <TextField name="coffee" label="Coffee name" />
            <SelectField name="technique" label="Technique" initialValue={BrewingTechnique.Drip}>
              <SelectFieldOption value={BrewingTechnique.Drip}>{BrewingTechnique.Drip}</SelectFieldOption>
            </SelectField>
            <SelectField name="process" label="Process" initialValue={BrewingProcess.HarioV60}>
              <SelectFieldOption value={BrewingProcess.HarioV60}>{BrewingProcess.HarioV60}</SelectFieldOption>
            </SelectField>
            <SubmitButton title="Rate">Rate</SubmitButton>
          </>
        )}
      />
    </>
  );
};
