import { queryByText, render } from "@testing-library/react";
import React from "react";

import { ButtonElement } from "testElements/Button.element";
import { TextInputElement } from "testElements/TextInput.element";
import { Brew } from "./Brew";

export class BrewFlow {
  static async render() {
    const { container } = render(<Brew />);
    return new BrewFlow(container);
  }

  private constructor(private readonly container: HTMLElement) {}

  public addNewBrew() {
    this.addNewBrewButton.click();
  }

  public rateBrew() {
    this.rateBrewButton.click();
  }

  public setCoffee(coffeeName: string) {
    return this.coffeeInput.setValue(coffeeName);
  }

  public get isAddingNewBrew(): boolean {
    return !!queryByText(this.container, "New brew");
  }

  public get isInErrorState(): boolean {
    return this.rateBrewButton.isDisabled;
  }

  private get addNewBrewButton() {
    return new ButtonElement(this.container, "Add new brew");
  }

  private get coffeeInput() {
    return new TextInputElement(this.container, "Coffee name");
  }

  private get rateBrewButton() {
    return new ButtonElement(this.container, "Rate");
  }
}
