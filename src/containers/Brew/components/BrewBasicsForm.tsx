import { TextField } from "components/Form/TextField";
import { ErrorsForValues } from "components/Form/types";
import { AeropressIcon } from "components/Svg/AeropressIcon";
import { CupIcon } from "components/Svg/CupIcon";
import { FrenchpressIcon } from "components/Svg/FrenchpressIcon";
import { WaveIcon } from "components/Svg/WaveIcon";
import { BrewStep } from "containers/Brew/components/BrewStep";
import React from "react";
import { Form, FormSpy } from "react-final-form";
import { Method, Technique } from "../options";
import { MethodField, MethodFieldLabel, MethodFieldOption } from "./MethodField";
import { TechniqueField, TechniqueFieldLabel, TechniqueFieldOption } from "./TechniqueField";

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
              <MethodField title="Pick method">
                <MethodFieldOption name="method" value={Method.v60} label={<MethodFieldLabel icon={<CupIcon />} />} />
                <MethodFieldOption name="method" value={Method.Wave} label={<MethodFieldLabel icon={<WaveIcon />} />} />
                <MethodFieldOption
                  name="method"
                  value={Method.AeroPress}
                  label={<MethodFieldLabel icon={<AeropressIcon />} />}
                />
                <MethodFieldOption
                  name="method"
                  value={Method.FrenchPress}
                  label={<MethodFieldLabel icon={<FrenchpressIcon />} />}
                />
              </MethodField>
            </BrewStep>
          )}
          {values.method && (
            <BrewStep step={3} label="Technique">
              <TechniqueField title="Technique">
                <TechniqueFieldOption label={<TechniqueFieldLabel />} name="technique" value={Technique.v60} />
                <TechniqueFieldOption label={<TechniqueFieldLabel />} name="technique" value={Technique.v60} />
              </TechniqueField>
            </BrewStep>
          )}
        </form>
      )}
    />
  );
};
