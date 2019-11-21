import { SelectField, SelectFieldOption } from "components/Form/SelectField";
import { SubmitButton } from "components/Form/SubmitButton";
import { TextField } from "components/Form/TextField";
import { ErrorsForValues } from "components/Form/types";
import { TabbedWrapper } from "components/TabbedWrapper";
import React, { useState } from "react";
import { Form } from "react-final-form";

export enum BrewingTechnique {
  Drip = "Drip"
}

export enum BrewingProcess {
  HarioV60 = "Hario v60"
}

export enum GrindSize {
  Coarse = "Coarse",
  MediumCoarse = "Medium Coarse",
  Medium = "Medium",
  MediumFine = "Medium Fine",
  Fine = "Fine",
  ExtraFine = "Extra Fine"
}

export interface BrewingBasicsFormValues {
  coffee: string;
  technique: BrewingTechnique;
  process: BrewingProcess;
}

export const Brew = () => {
  const [brewBasics, setBrewBasics] = useState<BrewingBasicsFormValues | undefined>(undefined);
  return (
    <TabbedWrapper>
      <h1>New brew</h1>
      {brewBasics ? (
        <BrewCustomizationForm />
      ) : (
        <BrewBasicsForm onSubmit={newBrewBasics => setBrewBasics(newBrewBasics)} />
      )}
    </TabbedWrapper>
  );
};

interface BrewBasicsFormProps {
  onSubmit(brewingBasics: BrewingBasicsFormValues): void;
}

const BrewBasicsForm: React.FC<BrewBasicsFormProps> = ({ onSubmit }) => {
  return (
    <Form<BrewingBasicsFormValues>
      onSubmit={onSubmit}
      subscription={{}}
      validate={values => {
        const errors: ErrorsForValues<BrewingBasicsFormValues> = {};
        if (!values.coffee) errors.coffee = "Required";
        if (!values.technique) errors.technique = "Required";
        if (!values.process) errors.process = "Required";
        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <TextField name="coffee" label="Coffee name" />
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

interface BrewCustomizationFormProps {}

interface BrewingCustomizationFormValues {
  waterDose: string;
  coffeeWeight: string;
  grindSize: GrindSize;
}

const BrewCustomizationForm: React.FC<BrewCustomizationFormProps> = () => {
  return (
    <Form<BrewingCustomizationFormValues>
      onSubmit={() => {}}
      subscription={{}}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <TextField name="waterDose" label="Water" initialValue="300" />
          <TextField name="coffeeWeight" label="Coffee weight" initialValue="18" />
          <SelectField name="grindSize" label="Grind size" initialValue={GrindSize.MediumFine}>
            {Object.values(GrindSize).map(grindSize => (
              <SelectFieldOption key={grindSize} value={grindSize}>
                {grindSize}
              </SelectFieldOption>
            ))}
          </SelectField>
        </form>
      )}
    />
  );
};
