import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import { Main } from "main";
import React from "react";
import { supressActWarnings } from "test/utils";

supressActWarnings();

describe("Application", () => {
  it("Application renders without crashing", async () => {
    render(<Main apiClient={{ getBrews: jest.fn().mockResolvedValue([]), createBrew: jest.fn() }} />);
  });
});
