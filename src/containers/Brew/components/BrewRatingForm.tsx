import { Form } from "react-final-form";
import React from "react";
import { ErrorsForValues } from "components/Form/types";
import { SelectField, SelectFieldOption } from "components/Form/SelectField";
import { SubmitButton } from "components/Form/SubmitButton";
import { BrewingBasicsFormValues } from "./BrewBasicsForm";
import { BrewingCustomizationFormValues } from "./BrewCustomizationForm";

export interface BrewRatingFormValues {
  rating: string;
  comment?: string;
}

export interface BrewRatingFormProps {
  onSubmit(brewRatingFormValues: BrewRatingFormValues): void;
  brewBasics: BrewingBasicsFormValues;
  brewCustomizationData: BrewingCustomizationFormValues;
}

export const BrewRatingForm: React.FC<BrewRatingFormProps> = ({ onSubmit, brewBasics, brewCustomizationData }) => {
  return (
    <Form
      onSubmit={onSubmit}
      subscription={{}}
      validate={values => {
        const errors: ErrorsForValues<BrewRatingFormValues> = {};
        if (!values.rating) errors.rating = "Required";
        return errors;
      }}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <p>Coffee Name: {brewBasics.coffeeName}</p>
          <p>Technique: {brewBasics.technique}</p>
          <p>Water: {brewCustomizationData.waterDose}</p>
          <p>Temperature: {brewCustomizationData.temperature}</p>
          <p>Coffee Weight: {brewCustomizationData.coffeeWeight}</p>
          <p>Grind Size: {brewCustomizationData.grindSize}</p>
          <SelectField name="rating" label="Rating">
            {Array.from({ length: 10 }, (_, index) => (
              <SelectFieldOption value={index} key={index}>
                {index}
              </SelectFieldOption>
            ))}
          </SelectField>
          <SubmitButton title="Save brew"></SubmitButton>
        </form>
      )}
    />
  );
};
