import { BrewFlow } from "./Brew.flow";
import { BrewingProcess, BrewingTechnique, GrindSize } from "./options";

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
    await brewFlow.setCoffeeName("THE BARN");
    await brewFlow.setBrewingMethod(BrewingTechnique.Drip);
    await brewFlow.setBrewingProcess(BrewingProcess.HarioV60);
    expect(brewFlow.isInErrorState).toBe(false);

    await brewFlow.openBrewCustomization();
    expect(await brewFlow.hasCorrectInitialValuesForProcess(BrewingProcess.HarioV60)).toBe(true);
    await brewFlow.customizeBrew({ waterDose: "305", coffeeWeight: "20", grindSize: GrindSize.MediumCoarse });
    await brewFlow.rateBrew();
    expect(
      await brewFlow.isDisplayingSummaryFor({
        coffeeName: "THE BARN",
        technique: BrewingTechnique.Drip,
        process: BrewingProcess.HarioV60,
        waterDose: "305",
        coffeeWeight: "20",
        grindSize: GrindSize.MediumCoarse
      })
    ).toBe(true);
    expect(brewFlow.isInAnotherErrorState).toBe(true);
    await brewFlow.setRating("1");
    expect(brewFlow.isInAnotherErrorState).toBe(false);
    await brewFlow.saveBrew();
    expect(
      brewFlow.hasSuccessfulySavedBrew({
        coffeeName: "THE BARN",
        technique: BrewingTechnique.Drip,
        process: BrewingProcess.HarioV60,
        waterDose: "305",
        coffeeWeight: "20",
        grindSize: GrindSize.MediumCoarse,
        rating: "1"
      })
    ).toBe(true);
  });
});
