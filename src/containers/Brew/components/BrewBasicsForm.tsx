import { SelectField, SelectFieldOption } from "components/Form/SelectField";
import { SubmitButton } from "components/Form/SubmitButton";
import { TextField } from "components/Form/TextField";
import { ErrorsForValues } from "components/Form/types";
import React from "react";
import { Form } from "react-final-form";
import { BrewingProcess, BrewingTechnique } from "../options";

export interface BrewingBasicsFormValues {
  coffeeName: string;
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
      subscription={{}}
      validate={values => {
        const errors: ErrorsForValues<BrewingBasicsFormValues> = {};
        if (!values.coffeeName) errors.coffeeName = "Required";
        if (!values.technique) errors.technique = "Required";
        if (!values.process) errors.process = "Required";
        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <TextField name="coffeeName" label="Coffee name" />
          <SelectField name="technique" label="Technique" initialValue={BrewingTechnique.Drip}>
            <SelectFieldOption value={BrewingTechnique.Drip}>{BrewingTechnique.Drip}</SelectFieldOption>
          </SelectField>
          <SelectField name="process" label="Process" initialValue={BrewingProcess.HarioV60}>
            <SelectFieldOption value={BrewingProcess.HarioV60}>{BrewingProcess.HarioV60}</SelectFieldOption>
          </SelectField>
          <SubmitButton title="Customize brew">Customize</SubmitButton>
        </form>
      )}
    />
  );
};
