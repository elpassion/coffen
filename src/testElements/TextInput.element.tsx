import { fireEvent, getByLabelText } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

export class TextInputElement {
  private readonly element: HTMLInputElement;
  constructor(private readonly container: HTMLElement, label: string) {
    this.element = getByLabelText(container, label) as HTMLInputElement;
  }
  setValue(value: string) {
    return userEvent.type(this.element, value);
  }
}
