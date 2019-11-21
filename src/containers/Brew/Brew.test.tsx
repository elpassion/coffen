import { wait } from "@testing-library/react";
import { BrewFlow } from "./Brew.flow";

// set coffee
// set brewing method
// set customisable fields
// - set water
// - set coffee weight
// - set grind
// submit brew
// set rating
// add comment
// save

describe("Brew", () => {
  let brewFlow: BrewFlow;
  beforeEach(async () => {
    brewFlow = await BrewFlow.render();
  });

  test("flow", async () => {
    expect(brewFlow.isAddingNewBrew).toBe(false);
    brewFlow.addNewBrew();
    await wait();
    expect(brewFlow.isAddingNewBrew).toBe(true);
  });
});
