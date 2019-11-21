import { SelectField, SelectFieldOption } from "components/Form/SelectField";
import { SubmitButton } from "components/Form/SubmitButton";
import { TextField } from "components/Form/TextField";
import { ErrorsForValues } from "components/Form/types";
import { TabbedWrapper } from "components/TabbedWrapper";
import React, { useState } from "react";
import { BrewBasicsForm, BrewingBasicsFormValues } from "./components/BrewBasicsForm";
import { BrewCustomizationForm } from "./components/BrewCustomizationForm";

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
