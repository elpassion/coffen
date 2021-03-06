import { BrewingBasicsFormValues } from "containers/Brew/components/BrewBasicsForm";
import { BrewingCustomizationFormValues } from "containers/Brew/components/BrewCustomizationForm";
import { BrewRatingFormValues } from "containers/Brew/components/BrewRatingForm";
import firebase from "firebase";
import React, { useCallback, useContext, useEffect, useState } from "react";

export interface CreateBrewData extends BrewingBasicsFormValues, BrewingCustomizationFormValues, BrewRatingFormValues {
  createdAt: Date;
}

export interface BrewData extends CreateBrewData {
  id: string;
}

export interface IApiClient {
  createBrew(data: CreateBrewData): Promise<BrewData>;
  getBrews(): Promise<BrewData[]>;
}

export class ApiClient implements IApiClient {
  private readonly firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyB8PxXqxJ525Wg0aoq75do31a94cRw_GmQ",
    authDomain: "coffen-85ffe.web.app",
    projectId: "coffen-85ffe"
  });
  private readonly db = this.firebaseApp.firestore();

  createBrew = async (data: CreateBrewData): Promise<BrewData> => {
    const brewRef = await this.db.collection("brews").add(data);
    const brewDoc = (await brewRef.get()).data() as CreateBrewData;
    return { id: brewRef.id, ...brewDoc };
  };

  getBrews = async (): Promise<BrewData[]> => {
    const brewsRef = await this.db
      .collection("brews")
      .orderBy("createdAt", "desc")
      .get();
    const brewDocs = brewsRef.docs.map(doc => {
      const data = doc.data();
      const normalizedData = { ...data, createdAt: data.createdAt.toDate() } as CreateBrewData;
      return { id: doc.id, ...normalizedData };
    });
    return brewDocs;
  };
}

export const ApiContext = React.createContext<IApiClient>({} as IApiClient);

export const useApi = () => useContext(ApiContext);

export const useApiCall = <ResponseData>(
  fn: () => Promise<ResponseData>,
  initialState: ResponseData
): { isLoading: boolean; data: ResponseData } => {
  const [data, setData] = useState<ResponseData>(initialState);
  const [isLoading, setIsLoading] = useState(false);

  const request = useCallback(async () => {
    setIsLoading(true);
    const data = await fn();
    setData(data);
    setIsLoading(false);
  }, [fn]);

  useEffect(() => {
    request();
  }, [request]);

  return { isLoading, data };
};
