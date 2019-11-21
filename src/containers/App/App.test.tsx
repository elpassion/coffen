import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { renderWithRedux } from "utils/testUtils";

import { App } from "./";

describe("Application", () => {
  it("Application renders without crashing", () => {
    renderWithRedux(<App />, { initialState: { auth: false } });
  });
});
