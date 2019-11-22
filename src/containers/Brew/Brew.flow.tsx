import { getByText, queryByText, render, wait } from "@testing-library/react";
import { App } from "containers/App";
import React from "react";
import { ButtonElement } from "testElements/Button.element";
import { SelectInputElement } from "testElements/SelectInput.element";
import { TextInputElement } from "testElements/TextInput.element";
import { BrewingBasicsFormValues } from "./parts/BrewBasicsForm";
import { BrewingCustomizationFormValues } from "./parts/BrewCustomizationForm";
import { BrewingProcess, BrewingTechnique, GrindSize } from "./options";
import { Routing } from "utils/routing";
import { ApiContext, CreateBrewData, IApi } from "api/api";

export class BrewFlow {
  static async render() {
    const api: IApi = { createBrew: jest.fn(), getBrews: jest.fn().mockResolvedValue([]) };
    const { container } = render(
      <ApiContext.Provider value={api}>
        <App />
      </ApiContext.Provider>
    );
    return new BrewFlow(container, api);
  }

  private constructor(private readonly container: HTMLElement, private readonly api: IApi) {}

  public async addNewBrew() {
    this.addNewBrewButton.click();
  }

  public async rateBrew() {
    this.rateBrewButton.click();
  }

  public async setCoffeeOrigin(origin: string) {
    return this.coffeeOriginInput.setValue(origin);
  }

  public async setCoffeeRoaster(roaster: string) {
    return this.coffeeRoasterInput.setValue(roaster);
  }

  public async setBrewingMethod(brewingMethod: BrewingTechnique) {
    this.brewingMethodInput.setValue(brewingMethod);
  }

  public async setBrewingProcess(brewingProcess: BrewingProcess) {
    this.brewingProcessInput.setValue(brewingProcess);
  }

  public async customizeBrew({ coffeeWeight, grindSize, waterDose, temperature }: BrewingCustomizationFormValues) {
    this.coffeeWeightInput.setValue(coffeeWeight);
    this.waterDoseInput.setValue(waterDose);
    this.temperatureInput.setValue(temperature);
    this.grindSizeInput.setValue(grindSize);
  }

  public async setRating(rating: string) {
    this.ratingInput.setValue(rating);
  }

  public async saveBrew() {
    this.saveBrewButton.click();
    await wait();
  }

  public async hasCorrectInitialValuesForProcess(brewingProcess: BrewingProcess): Promise<boolean> {
    return (
      this.waterDoseInput.value === "300" &&
      this.coffeeWeightInput.value === "18" &&
      this.grindSizeInput.value === GrindSize.MediumFine
    );
  }

  public async isDisplayingSummaryFor(
    brewingData: BrewingBasicsFormValues & BrewingCustomizationFormValues
  ): Promise<boolean> {
    return (
      !!getByText(this.container, `Origin: ${brewingData.origin}`) &&
      !!getByText(this.container, `Roaster: ${brewingData.roaster}`) &&
      !!getByText(this.container, `Technique: ${brewingData.technique}`) &&
      !!getByText(this.container, `Water: ${brewingData.waterDose}`) &&
      !!getByText(this.container, `Temperature: ${brewingData.temperature}`) &&
      !!getByText(this.container, `Coffee Weight: ${brewingData.coffeeWeight}`) &&
      !!getByText(this.container, `Grind Size: ${brewingData.grindSize}`)
    );
  }

  public get isAddingNewBrew(): boolean {
    return !!queryByText(this.container, "LET'S BREW");
  }

  public get isInErrorState(): boolean {
    return this.saveBrewButton.isDisabled;
  }

  public hasSuccessfulySavedBrew(brewingData: CreateBrewData): boolean {
    expect(this.api.createBrew).toHaveBeenCalledWith({ ...brewingData, createdAt: expect.any(Date) });
    expect(this.api.getBrews).toHaveBeenCalledTimes(2);
    return window.location.pathname === Routing.Feed;
  }

  private get addNewBrewButton() {
    return new ButtonElement(this.container, "Add new brew");
  }

  private get coffeeOriginInput() {
    return new TextInputElement(this.container, "Origin");
  }

  private get coffeeRoasterInput() {
    return new TextInputElement(this.container, "Roaster");
  }

  private get brewingMethodInput() {
    return new SelectInputElement<BrewingTechnique>(this.container, "Technique");
  }

  private get brewingProcessInput() {
    return new SelectInputElement<BrewingProcess>(this.container, "Process");
  }

  private get waterDoseInput() {
    return new TextInputElement(this.container, "Water (ml)");
  }

  private get coffeeWeightInput() {
    return new TextInputElement(this.container, "Coffee weight (g)");
  }

  private get temperatureInput() {
    return new TextInputElement(this.container, "Temperature (°C)");
  }

  private get grindSizeInput() {
    return new SelectInputElement<GrindSize>(this.container, "Grind size");
  }

  private get ratingInput() {
    return new SelectInputElement(this.container, "Rating");
  }

  private get rateBrewButton() {
    return new ButtonElement(this.container, "Rate");
  }

  private get saveBrewButton() {
    return new ButtonElement(this.container, "Save brew");
  }
}
