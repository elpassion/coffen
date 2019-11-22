import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithRedux } from "utils/testUtils";

import { App } from "./";
import { ApiContext } from "api/api";

describe("Application", () => {
  it("Application renders without crashing", () => {
    renderWithRedux(
      <ApiContext.Provider value={{ createBrew: jest.fn(), getBrews: jest.fn().mockResolvedValue([]) }}>
        <App />
      </ApiContext.Provider>,
      { initialState: { auth: false } }
    );
  });
});
