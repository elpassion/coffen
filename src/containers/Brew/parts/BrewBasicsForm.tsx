import { BrewStep } from "components/BrewStep";
import { RadioField, RadioFieldOption } from "components/Form/RadioField";
import { SelectField, SelectFieldOption } from "components/Form/SelectField";
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
          <BrewStep step={1} label="Coffee">
            <TextField name="origin" label="Origin" />
            <TextField name="roaster" label="Roaster" />
          </BrewStep>

          {values.origin && values.roaster && (
            <BrewStep step={2} label="Technique">
              <RadioField title="Pick technique">
                <RadioFieldOption value={BrewingProcess.HarioV60} />
                <RadioFieldOption value={BrewingProcess.Wave} />
                <RadioFieldOption value={BrewingProcess.AeroPress} />
                <RadioFieldOption value={BrewingProcess.FrenchPress} />
              </RadioField>
            </BrewStep>
          )}
          {values.technique && (
            <BrewStep step={3} label="Method">
              <SelectField name="process" label="Process" initialValue="">
                <SelectFieldOption value={""}></SelectFieldOption>
                <SelectFieldOption value={BrewingProcess.HarioV60}>{BrewingProcess.HarioV60}</SelectFieldOption>
              </SelectField>
            </BrewStep>
          )}
        </form>
      )}
    />
  );
};
