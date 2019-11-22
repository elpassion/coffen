import React, { useState } from "react";
import { BrewBasicsForm, BrewingBasicsFormValues } from "./components/BrewBasicsForm";
import { BrewCustomizationForm, BrewingCustomizationFormValues } from "./components/BrewCustomizationForm";
import { SubmitButton } from "components/Form/SubmitButton";
import { Form } from "react-final-form";
import { ErrorsForValues } from "components/Form/types";
import { SelectField, SelectFieldOption } from "components/Form/SelectField";
import { useHistory } from "react-router";
import { Routing } from "utils/routing";

interface BrewRatingFormValues {
  rating: number;
  comment: string;
}

export const Brew = () => {
  const [brewBasics, setBrewBasics] = useState<BrewingBasicsFormValues | undefined>(undefined);
  const [brewCustomizationData, setBrewCustomizationData] = useState<BrewingCustomizationFormValues | undefined>(
    undefined
  );
  const history = useHistory();

  const saveBrew = (brewRatingValues: BrewRatingFormValues) => {
    history.push(Routing.Feed);
  };

  return (
    <>
      <h1>New brew</h1>
      {brewCustomizationData && brewBasics ? (
        <Form
          onSubmit={saveBrew}
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
              <p>Coffee Weight: {brewCustomizationData.coffeeWeight}</p>
              <p>Grind Size: {brewCustomizationData.grindSize}</p>
              <SelectField name="rating" label="Rating">
                {Array.from({ length: 10 }, (_, index) => (
                  <SelectFieldOption value={index} key={index}>
                    ${index}
                  </SelectFieldOption>
                ))}
              </SelectField>
              <SubmitButton title="Save brew"></SubmitButton>
            </form>
          )}
        />
      ) : brewBasics ? (
        <BrewCustomizationForm onSubmit={brewCustomizationData => setBrewCustomizationData(brewCustomizationData)} />
      ) : (
        <BrewBasicsForm onSubmit={newBrewBasics => setBrewBasics(newBrewBasics)} />
      )}
    </>
  );
};
