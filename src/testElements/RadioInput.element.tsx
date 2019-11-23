import { getByLabelText, getByTitle } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputElement } from "./Input.element";

export class RadioInputElement<OptionValue extends string = string> implements InputElement<OptionValue> {
  private readonly element: HTMLSelectElement;
  constructor(private readonly container: HTMLElement, title: string) {
    this.element = getByTitle(container, title) as HTMLSelectElement;
  }

  get value() {
    return this.element.value as OptionValue;
  }

  setValue(value: OptionValue) {
    return userEvent.selectOptions(this.element, value);
  }
}
