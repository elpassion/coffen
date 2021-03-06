import { SelectField, SelectFieldOption } from "components/Form/SelectField";
import { SubmitButton } from "components/Form/SubmitButton";
import { ErrorsForValues } from "components/Form/types";
import React from "react";
import { Form } from "react-final-form";
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
          <p>Origin: {brewBasics.origin}</p>
          <p>Roaster: {brewBasics.roaster}</p>
          <p>Method: {brewBasics.method}</p>
          <p>Water: {brewCustomizationData.waterDose}</p>
          <p>Temperature: {brewCustomizationData.temperature}</p>
          <p>Coffee Weight: {brewCustomizationData.coffeeWeight}</p>
          <p>Grind Size: {brewCustomizationData.grindSize}</p>
          <br />
          <SelectField name="rating" label="Rating">
            {Array.from({ length: 10 }, (_, index) => (
              <SelectFieldOption value={index + 1} key={index + 1}>
                {index + 1}
              </SelectFieldOption>
            ))}
          </SelectField>
          <br />
          <SubmitButton title="Save brew">Save brew</SubmitButton>
        </form>
      )}
    />
  );
};
