import { fireEvent, getByTitle } from "@testing-library/react";

export class ButtonElement {
  private readonly element: HTMLButtonElement;
  constructor(private readonly container: HTMLElement, title: string) {
    this.element = getByTitle(container, title) as HTMLButtonElement;
  }
  public click() {
    fireEvent.click(this.element);
  }

  public get isDisabled() {
    return !!this.element.disabled;
  }
}
