import React, { useState } from "react";
import { useHistory } from "react-router";
import { Routing } from "utils/routing";
import { BrewBasicsForm, BrewingBasicsFormValues } from "./components/BrewBasicsForm";
import { BrewCustomizationForm, BrewingCustomizationFormValues } from "./components/BrewCustomizationForm";
import { BrewRatingForm, BrewRatingFormValues } from "./components/BrewRatingForm";
import { useApi } from "api/api";

export const Brew = () => {
  const history = useHistory();
  const [brewBasics, setBrewBasics] = useState<BrewingBasicsFormValues | undefined>(undefined);
  const [brewCustomizationData, setBrewCustomizationData] = useState<BrewingCustomizationFormValues | undefined>(
    undefined
  );

  const api = useApi();
  const saveBrew = async (brewRatingValues: BrewRatingFormValues) => {
    if (!brewBasics || !brewCustomizationData) return;
    await api.createBrew({ ...brewBasics, ...brewCustomizationData, ...brewRatingValues });
    history.push(Routing.Feed);
  };

  return (
    <>
      <h1>New brew</h1>
      {brewCustomizationData && brewBasics ? (
        <BrewRatingForm onSubmit={saveBrew} brewBasics={brewBasics} brewCustomizationData={brewCustomizationData} />
      ) : brewBasics ? (
        <BrewCustomizationForm onSubmit={brewCustomizationData => setBrewCustomizationData(brewCustomizationData)} />
      ) : (
        <BrewBasicsForm onSubmit={newBrewBasics => setBrewBasics(newBrewBasics)} />
      )}
    </>
  );
};
