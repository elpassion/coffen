import { setupBrowserTests } from "test/utils";
import { BrewFlow } from "./Brew.flow";
import { GrindSize, Method, Technique } from "./options";

setupBrowserTests();

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
    await brewFlow.setBrewingMethod(Method.v60);
    await brewFlow.setBrewingTechnique(Technique.v60);
    expect(await brewFlow.hasCorrectInitialValuesForTechnique(Technique.v60)).toBe(true);
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
        method: Method.v60,
        technique: Technique.v60,
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
        method: Method.v60,
        technique: Technique.v60,
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
