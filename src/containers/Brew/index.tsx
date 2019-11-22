import React, { useState } from "react";
import { useHistory } from "react-router";

import { Routing } from "utils/routing";
import { useApi } from "api/api";

import { BrewBasicsForm, BrewingBasicsFormValues } from "./parts/BrewBasicsForm";
import { BrewCustomizationForm, BrewingCustomizationFormValues } from "./parts/BrewCustomizationForm";
import { BrewRatingForm, BrewRatingFormValues } from "./parts/BrewRatingForm";
import { PageTitle } from "components/PageTitle";

import { StepsWrapper } from "./style";

export const Brew = () => {
  const history = useHistory();
  const [brewBasics, setBrewBasics] = useState<BrewingBasicsFormValues | undefined>(undefined);
  const [brewCustomizationData, setBrewCustomizationData] = useState<BrewingCustomizationFormValues | undefined>(
    undefined
  );

  const api = useApi();
  const saveBrew = async (brewRatingValues: BrewRatingFormValues) => {
    if (!brewBasics || !brewCustomizationData) return;
    await api.createBrew({ ...brewBasics, ...brewCustomizationData, ...brewRatingValues, createdAt: new Date() });
    history.push(Routing.Feed);
  };

  return (
    <>
      <PageTitle>Let’s brew</PageTitle>
      <StepsWrapper>
        {!brewBasics && <BrewBasicsForm onSubmit={newBrewBasics => setBrewBasics(newBrewBasics)} />}
        {brewBasics && (
          <BrewCustomizationForm onSubmit={brewCustomizationData => setBrewCustomizationData(brewCustomizationData)} />
        )}
        {brewBasics && brewCustomizationData && (
          <BrewRatingForm onSubmit={saveBrew} brewBasics={brewBasics} brewCustomizationData={brewCustomizationData} />
        )}
      </StepsWrapper>
    </>
  );
};
