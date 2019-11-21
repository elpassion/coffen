import { queryByText, render } from "@testing-library/react";
import React from "react";
import { ButtonElement } from "testElements/Button.element";
import { TextInputElement } from "testElements/TextInput.element";
import { SelectInputElement } from "testElements/SelectInput.element";
import { BrewingTechnique, BrewingProcess, GrindSize } from ".";
import { App } from "containers/App";

export class BrewFlow {
  static async render() {
    const { container } = render(<App />);
    return new BrewFlow(container);
  }

  private constructor(private readonly container: HTMLElement) {}

  public async addNewBrew() {
    this.addNewBrewButton.click();
  }

  public async rateBrew() {
    this.rateBrewButton.click();
  }

  public async setCoffee(coffeeName: string) {
    return this.coffeeInput.setValue(coffeeName);
  }

  public async setBrewingMethod(brewingMethod: BrewingTechnique) {
    this.brewingMethodInput.setValue(brewingMethod);
  }

  public async setBrewingProcess(brewingProcess: BrewingProcess) {
    this.brewingProcessInput.setValue(brewingProcess);
  }

  public async openBrewCustomization() {
    this.openBrewCustomizationButton.click();
  }

  public hasCorrectInitialValuesForProcess(brewingProcess: BrewingProcess) {
    return (
      this.waterDoseInput.value === "300" &&
      this.coffeeWeightInput.value === "18" &&
      this.grindSizeInput.value === GrindSize.MediumFine
    );
  }

  public get isAddingNewBrew(): boolean {
    return !!queryByText(this.container, "New brew");
  }

  public get isInErrorState(): boolean {
    return this.openBrewCustomizationButton.isDisabled;
  }

  private get addNewBrewButton() {
    return new ButtonElement(this.container, "Add new brew");
  }

  private get coffeeInput() {
    return new TextInputElement(this.container, "Coffee name");
  }

  private get brewingMethodInput() {
    return new SelectInputElement<BrewingTechnique>(this.container, "Technique");
  }

  private get brewingProcessInput() {
    return new SelectInputElement<BrewingProcess>(this.container, "Process");
  }

  private get waterDoseInput() {
    return new TextInputElement(this.container, "Water");
  }

  private get coffeeWeightInput() {
    return new TextInputElement(this.container, "Coffee weight");
  }

  private get grindSizeInput() {
    return new SelectInputElement<GrindSize>(this.container, "Grind size");
  }

  private get rateBrewButton() {
    return new ButtonElement(this.container, "Rate");
  }

  private get openBrewCustomizationButton() {
    return new ButtonElement(this.container, "Customize brew");
  }
}
