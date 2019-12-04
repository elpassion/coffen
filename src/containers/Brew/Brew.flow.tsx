import { getByText, render, wait } from "@testing-library/react";
import { CreateBrewData, IApiClient } from "api/api";
import { Main } from "main";
import React from "react";
import { ButtonElement } from "test/elements/Button.element";
import { RadioInputElement } from "test/elements/RadioInput.element";
import { SelectInputElement } from "test/elements/SelectInput.element";
import { TextInputElement } from "test/elements/TextInput.element";
import { Routing } from "utils/routing";
import { BrewingBasicsFormValues } from "./components/BrewBasicsForm";
import { BrewingCustomizationFormValues } from "./components/BrewCustomizationForm";
import { GrindSize, Method, Technique } from "./options";

export class BrewFlow {
  static async render() {
    const api: IApiClient = { createBrew: jest.fn(), getBrews: jest.fn().mockResolvedValue([]) };
    const { container } = render(<Main apiClient={api} />);
    return new BrewFlow(container, api);
  }

  private constructor(private readonly container: HTMLElement, private readonly api: IApiClient) {}

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

  public async setBrewingMethod(brewingMethod: Method) {
    this.brewingMethodInput.setValue(brewingMethod);
  }

  public async setBrewingTechnique(brewingTechnique: Technique) {
    this.brewingTechniqueInput.setValue(brewingTechnique);
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

  public async hasCorrectInitialValuesForTechnique(brewingTechnique: Technique): Promise<boolean> {
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
      !!getByText(this.container, `Method: ${brewingData.method}`) &&
      !!getByText(this.container, `Water: ${brewingData.waterDose}`) &&
      !!getByText(this.container, `Temperature: ${brewingData.temperature}`) &&
      !!getByText(this.container, `Coffee Weight: ${brewingData.coffeeWeight}`) &&
      !!getByText(this.container, `Grind Size: ${brewingData.grindSize}`)
    );
  }

  public get isAddingNewBrew(): boolean {
    return window.location.pathname === Routing.Brew;
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
    return new RadioInputElement<Method>(this.container, "Pick method");
  }

  private get brewingTechniqueInput() {
    return new SelectInputElement<Technique>(this.container, "Technique");
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
