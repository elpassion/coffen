import React, { useContext, useState, useEffect } from "react";
import { BrewingBasicsFormValues } from "containers/Brew/components/BrewBasicsForm";
import { BrewingCustomizationFormValues } from "containers/Brew/components/BrewCustomizationForm";
import { BrewRatingFormValues } from "containers/Brew/components/BrewRatingForm";

export interface CreateBrewData extends BrewingBasicsFormValues, BrewingCustomizationFormValues, BrewRatingFormValues {}

export interface BrewData extends CreateBrewData {
  id: string;
}

export class Api {
  async createBrew(data: CreateBrewData): Promise<{}> {
    return {};
  }

  async getBrews(): Promise<BrewData[]> {
    return [];
  }
}

export const ApiContext = React.createContext<Api>({} as Api);

export const useApi = () => useContext(ApiContext);

export const useApiCall = <ResponseData>(
  fn: () => Promise<ResponseData>,
  initialState: ResponseData
): { isLoading: boolean; data: ResponseData } => {
  const [data, setData] = useState<ResponseData>(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const getBrews = async () => {
    setIsLoading(true);
    const data = await fn();
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getBrews();
  }, []);

  return { isLoading, data };
};
