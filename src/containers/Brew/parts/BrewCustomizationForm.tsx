import { SelectField, SelectFieldOption } from "components/Form/SelectField";
import { SubmitButton } from "components/Form/SubmitButton";
import { TextField } from "components/Form/TextField";
import React from "react";
import { Form } from "react-final-form";
import { GrindSize } from "../options";

export interface BrewingCustomizationFormValues {
  waterDose: string;
  coffeeWeight: string;
  temperature: string;
  grindSize: GrindSize;
}

interface BrewCustomizationFormProps {
  onSubmit(brewingCustomizationValues: BrewingCustomizationFormValues): void;
}

export const BrewCustomizationForm: React.FC<BrewCustomizationFormProps> = ({ onSubmit }) => {
  return (
    <Form<BrewingCustomizationFormValues>
      onSubmit={onSubmit}
      subscription={{}}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <TextField name="waterDose" label="Water (ml)" initialValue="300" />
          <br />
          <TextField name="coffeeWeight" label="Coffee weight (g)" initialValue="18" />
          <br />
          <TextField name="temperature" label="Temperature (°C)" initialValue="95" />
          <br />
          <SelectField name="grindSize" label="Grind size" initialValue={GrindSize.MediumFine}>
            {Object.values(GrindSize).map(grindSize => (
              <SelectFieldOption key={grindSize} value={grindSize}>
                {grindSize}
              </SelectFieldOption>
            ))}
          </SelectField>
          <br />
          <SubmitButton title="Rate">Enjoy the coffee</SubmitButton>
        </form>
      )}
    />
  );
};
