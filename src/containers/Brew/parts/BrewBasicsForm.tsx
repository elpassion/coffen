import { BrewStep } from "components/BrewStep";
import { RadioField, RadioFieldOption } from "components/Form/RadioField";
import { SelectField, SelectFieldOption } from "components/Form/SelectField";
import { TextField } from "components/Form/TextField";
import { ErrorsForValues } from "components/Form/types";
import { AeropressIcon } from "components/Svg/AeropressIcon";
import { CupIcon } from "components/Svg/CupIcon";
import { FrenchpressIcon } from "components/Svg/FrenchpressIcon";
import { WaveIcon } from "components/Svg/WaveIcon";
import React from "react";
import { Form, FormSpy } from "react-final-form";
import { Method, Technique } from "../options";

export interface BrewingBasicsFormValues {
  origin: string;
  roaster: string;
  method: Method;
  technique: Technique;
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
        if (!values.method) errors.method = "Required";
        if (!values.technique) errors.technique = "Required";
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
            <BrewStep step={2} label="Method">
              <RadioField title="Pick method">
                <RadioFieldOption name="method" value={Method.v60} icon={<CupIcon />} />
                <RadioFieldOption name="method" value={Method.Wave} icon={<WaveIcon />} />
                <RadioFieldOption name="method" value={Method.AeroPress} icon={<AeropressIcon />} />
                <RadioFieldOption name="method" value={Method.FrenchPress} icon={<FrenchpressIcon />} />
              </RadioField>
            </BrewStep>
          )}
          {values.method && (
            <BrewStep step={3} label="Technique">
              <SelectField name="technique" label="Technique" initialValue="">
                <SelectFieldOption value={""}></SelectFieldOption>
                <SelectFieldOption value={Technique.v60}>{Technique.v60}</SelectFieldOption>
              </SelectField>
            </BrewStep>
          )}
        </form>
      )}
    />
  );
};
