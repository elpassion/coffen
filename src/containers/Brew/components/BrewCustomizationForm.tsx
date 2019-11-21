import { SelectField, SelectFieldOption } from "components/Form/SelectField";
import { SubmitButton } from "components/Form/SubmitButton";
import { TextField } from "components/Form/TextField";
import React from "react";
import { Form } from "react-final-form";
import { GrindSize } from "../options";

export interface BrewingCustomizationFormValues {
  waterDose: string;
  coffeeWeight: string;
  grindSize: GrindSize;
}

interface BrewCustomizationFormProps {}

export const BrewCustomizationForm: React.FC<BrewCustomizationFormProps> = () => {
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
          <SubmitButton title="Rate">Rate</SubmitButton>
        </form>
      )}
    />
  );
};
