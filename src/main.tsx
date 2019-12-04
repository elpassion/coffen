import { ApiClient, ApiContext, IApiClient } from "api/api";
import React from "react";
import { GlobalStyle } from "styles";

export const Main = ({ apiClient = new ApiClient() }: { apiClient?: IApiClient }) => {
  const { App } = require("containers/App");

  return (
    <>
      <GlobalStyle />
      <ApiContext.Provider value={apiClient}>
        <App />
      </ApiContext.Provider>
    </>
  );
};
