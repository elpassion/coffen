import { getByLabelText } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export class SelectInputElement {
  private readonly element: HTMLSelectElement;
  constructor(private readonly container: HTMLElement, label: string) {
    this.element = getByLabelText(container, label) as HTMLSelectElement;
  }
  setValue(value: string) {
    return userEvent.selectOptions(this.element, value);
  }
}
