import React, { useState } from "react";
import { BrewBasicsForm, BrewingBasicsFormValues } from "./components/BrewBasicsForm";
import { BrewCustomizationForm, BrewingCustomizationFormValues } from "./components/BrewCustomizationForm";

export const Brew = () => {
  const [brewBasics, setBrewBasics] = useState<BrewingBasicsFormValues | undefined>(undefined);
  const [brewCustomizationData, setBrewCustomizationData] = useState<BrewingCustomizationFormValues | undefined>(
    undefined
  );

  return (
    <>
      <h1>New brew</h1>
      {brewCustomizationData && brewBasics ? (
        <div>
          <p>Coffee Name: {brewBasics.coffeeName}</p>
          <p>Technique: {brewBasics.technique}</p>
          <p>Water: {brewCustomizationData.waterDose}</p>
          <p>Coffee Weight: {brewCustomizationData.coffeeWeight}</p>
          <p>Grind Size: {brewCustomizationData.grindSize}</p>
        </div>
      ) : brewBasics ? (
        <BrewCustomizationForm onSubmit={brewCustomizationData => setBrewCustomizationData(brewCustomizationData)} />
      ) : (
        <BrewBasicsForm onSubmit={newBrewBasics => setBrewBasics(newBrewBasics)} />
      )}
    </>
  );
};
