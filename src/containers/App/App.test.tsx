import "@testing-library/jest-dom/extend-expect";
import { ApiContext } from "api/api";
import React from "react";
import { supressActWarnings } from "test/utils";
import { App } from "./";
import { render } from "@testing-library/react";

supressActWarnings();

describe("Application", () => {
  it("Application renders without crashing", () => {
    render(
      <ApiContext.Provider value={{ createBrew: jest.fn(), getBrews: jest.fn().mockResolvedValue([]) }}>
        <App />{" "}
      </ApiContext.Provider>
    );
  });
});
