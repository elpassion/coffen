import { supressActWarnings } from "test/utils";
import { BrewFlow } from "./Brew.flow";
import { BrewingProcess, BrewingTechnique, GrindSize } from "./options";

supressActWarnings();

describe("Brew", () => {
  let brewFlow: BrewFlow;
  beforeEach(async () => {
    brewFlow = await BrewFlow.render();
  });

  test("flow", async () => {
    expect(brewFlow.isAddingNewBrew).toBe(false);
    await brewFlow.addNewBrew();
    expect(brewFlow.isAddingNewBrew).toBe(true);

    await brewFlow.setCoffeeOrigin("Kenya");
    await brewFlow.setCoffeeRoaster("THE BARN");
    await brewFlow.setBrewingTechnique(BrewingTechnique.v60);
    await brewFlow.setBrewingProcess(BrewingProcess.v60);
    expect(await brewFlow.hasCorrectInitialValuesForProcess(BrewingProcess.v60)).toBe(true);
    await brewFlow.customizeBrew({
      waterDose: "305",
      coffeeWeight: "20",
      grindSize: GrindSize.MediumCoarse,
      temperature: "69"
    });
    await brewFlow.rateBrew();
    expect(
      await brewFlow.isDisplayingSummaryFor({
        roaster: "THE BARN",
        origin: "Kenya",
        technique: BrewingTechnique.v60,
        process: BrewingProcess.v60,
        temperature: "69",
        waterDose: "305",
        coffeeWeight: "20",
        grindSize: GrindSize.MediumCoarse
      })
    ).toBe(true);
    expect(brewFlow.isInErrorState).toBe(true);
    await brewFlow.setRating("1");
    expect(brewFlow.isInErrorState).toBe(false);
    await brewFlow.saveBrew();
    expect(
      brewFlow.hasSuccessfulySavedBrew({
        roaster: "THE BARN",
        origin: "Kenya",
        technique: BrewingTechnique.v60,
        process: BrewingProcess.v60,
        temperature: "69",
        waterDose: "305",
        coffeeWeight: "20",
        grindSize: GrindSize.MediumCoarse,
        rating: "1",
        createdAt: new Date()
      })
    ).toBe(true);
  });
});
