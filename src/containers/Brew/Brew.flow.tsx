import React from "react";
import { render, queryByText } from "@testing-library/react";
import { Brew } from "./Brew";
import { ButtonElement } from "../../testElements/Button.element";

export class BrewFlow {
  static async render() {
    const { container } = render(<Brew />);
    return new BrewFlow(container);
  }

  private constructor(private readonly container: HTMLElement) {}

  public addNewBrew() {
    this.addNewBrewButton.click();
  }

  get addNewBrewButton() {
    return new ButtonElement(this.container, "Add new brew");
  }

  get isAddingNewBrew(): boolean {
    return !!queryByText(this.container, "New brew");
  }
}
