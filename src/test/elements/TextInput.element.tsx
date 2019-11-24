import { getByLabelText } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputElement } from "./Input.element";

export class TextInputElement implements InputElement<string> {
  private readonly element: HTMLInputElement;

  constructor(private readonly container: HTMLElement, label: string) {
    this.element = getByLabelText(container, label) as HTMLInputElement;
  }

  get value() {
    return this.element.value;
  }

  setValue(value: string) {
    return userEvent.type(this.element, value);
  }
}
