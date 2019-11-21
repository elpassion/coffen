import { BrewingProcess, BrewingTechnique } from ".";
import { BrewFlow } from "./Brew.flow";
import { waitForDomChange } from "@testing-library/dom";

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
    await brewFlow.addNewBrew();
    expect(brewFlow.isAddingNewBrew).toBe(true);

    expect(brewFlow.isInErrorState).toBe(true);
    await brewFlow.setCoffee("THE BARN");
    await brewFlow.setBrewingMethod(BrewingTechnique.Drip);
    await brewFlow.setBrewingProcess(BrewingProcess.HarioV60);
    expect(brewFlow.isInErrorState).toBe(false);

    await brewFlow.openBrewCustomization();
    expect(brewFlow.hasCorrectInitialValuesForProcess(BrewingProcess.HarioV60)).toBe(true);
  });
});
