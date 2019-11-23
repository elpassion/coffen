import { BrewStep } from "components/BrewStep";
import { SelectField, SelectFieldOption } from "components/Form/SelectField";
import { TextField } from "components/Form/TextField";
import { ErrorsForValues } from "components/Form/types";
import { CupIcon } from "components/Svg/CupIcon";
import { rem, rgba } from "polished";
import React from "react";
import { Field, Form, FormSpy } from "react-final-form";
import styled from "styled-components";
import { colorName } from "styles";
import { BrewingProcess, BrewingTechnique } from "../options";
import { RadioField, RadioFieldOption } from "components/Form/RadioField";

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
