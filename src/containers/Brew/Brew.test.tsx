import React, { useState } from "react";
import {
  render,
  fireEvent,
  getByTitle,
  queryByText,
  wait
} from "@testing-library/react";

// add new brew
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

const Brew = () => {
  const [isAddingNewBrew, setIsAddingNewBrew] = useState(false);
  return isAddingNewBrew ? (
    <h1>New brew</h1>
  ) : (
    <button title="Add new brew" onClick={() => setIsAddingNewBrew(true)}>
      +
    </button>
  );
};

class ButtonElement {
  private readonly element: HTMLButtonElement;

  constructor(private readonly container: HTMLElement, title: string) {
    this.element = getByTitle(container, title) as HTMLButtonElement;
  }

  click() {
    fireEvent.click(this.element);
  }
}

class BrewFlow {
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
