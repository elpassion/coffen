import "@testing-library/jest-dom/extend-expect";
import { ApiContext } from "api/api";
import React from "react";
import { supressActWarnings } from "test/utils";
import { renderWithRedux } from "utils/testUtils";
import { App } from "./";

supressActWarnings();

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
