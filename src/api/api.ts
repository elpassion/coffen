import React, { useContext } from "react";
import { BrewingBasicsFormValues } from "containers/Brew/components/BrewBasicsForm";
import { BrewingCustomizationFormValues } from "containers/Brew/components/BrewCustomizationForm";
import { BrewRatingFormValues } from "containers/Brew/components/BrewRatingForm";

export interface CreateBrewData extends BrewingBasicsFormValues, BrewingCustomizationFormValues, BrewRatingFormValues {}

export class Api {
  async createBrew(data: CreateBrewData): Promise<{}> {
    return {};
  }

  async getBrews(): Promise<CreateBrewData[]> {
    return [];
  }
}

export const ApiContext = React.createContext<Api>({} as Api);

export const useApi = () => useContext(ApiContext);
