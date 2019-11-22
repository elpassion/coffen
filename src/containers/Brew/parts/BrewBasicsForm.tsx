import { SelectField, SelectFieldOption } from "components/Form/SelectField";
import { SubmitButton } from "components/Form/SubmitButton";
import { TextField } from "components/Form/TextField";
import { ErrorsForValues } from "components/Form/types";
import React from "react";
import { Form, FormSpy } from "react-final-form";
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
          <TextField name="origin" label="Origin" />
          <TextField name="roaster" label="Roaster" />
          {values.origin && values.roaster && (
            <SelectField name="technique" label="Technique" initialValue="">
              <SelectFieldOption value={""}></SelectFieldOption>
              <SelectFieldOption value={BrewingTechnique.Drip}>{BrewingTechnique.Drip}</SelectFieldOption>
            </SelectField>
          )}
          {values.technique && (
            <SelectField name="process" label="Process" initialValue="">
              <SelectFieldOption value={""}></SelectFieldOption>
              <SelectFieldOption value={BrewingProcess.HarioV60}>{BrewingProcess.HarioV60}</SelectFieldOption>
            </SelectField>
          )}
        </form>
      )}
    />
  );
};
