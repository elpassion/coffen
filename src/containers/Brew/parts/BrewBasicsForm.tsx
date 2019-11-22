import { SelectField, SelectFieldOption } from "components/Form/SelectField";
import { TextField } from "components/Form/TextField";
import { ErrorsForValues } from "components/Form/types";
import React from "react";
import { Form, FormSpy } from "react-final-form";
import { BrewStep } from "components/BrewStep";

import { BrewingProcess, BrewingTechnique } from "../options";

export interface BrewingBasicsFormValues {
  origin: string;
  roaster: string;
  technique: BrewingTechnique;
  process: BrewingProcess;
}

interface BrewBasicsFormProps {
  onSubmit(brewingBasics: BrewingBasicsFormValues): void;
}

export const BrewBasicsForm: React.FC<BrewBasicsFormProps> = ({ onSubmit }) => {
  return (
    <Form<BrewingBasicsFormValues>
      onSubmit={onSubmit}
      validate={values => {
        const errors: ErrorsForValues<BrewingBasicsFormValues> = {};
        if (!values.origin) errors.origin = "Required";
        if (!values.roaster) errors.roaster = "Required";
        if (!values.technique) errors.technique = "Required";
        if (!values.process) errors.process = "Required";
        return errors;
      }}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <FormSpy
            subscription={{ valid: true, values: true }}
            onChange={({ valid, values }) => {
              valid && onSubmit(values as BrewingBasicsFormValues);
            }}
          />
          <BrewStep step={1} label="Coffee">
            <TextField name="origin" label="Origin" />
            <br />
            <TextField name="roaster" label="Roaster" />
            <br />
          </BrewStep>

          {values.origin && values.roaster && (
            <BrewStep step={2} label="Technique">
              <SelectField name="technique" label="Technique" initialValue="">
                <SelectFieldOption value={""}></SelectFieldOption>
                <br />
                <SelectFieldOption value={BrewingTechnique.Drip}>{BrewingTechnique.Drip}</SelectFieldOption>
                <br />
              </SelectField>
            </BrewStep>
          )}
          {values.technique && (
            <BrewStep step={3} label="Method">
              <SelectField name="process" label="Process" initialValue="">
                <SelectFieldOption value={""}></SelectFieldOption>
                <br />
                <SelectFieldOption value={BrewingProcess.HarioV60}>{BrewingProcess.HarioV60}</SelectFieldOption>
                <br />
              </SelectField>
            </BrewStep>
          )}
        </form>
      )}
    />
  );
};
