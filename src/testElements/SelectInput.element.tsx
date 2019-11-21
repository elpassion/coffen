import { getByLabelText } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { InputElement } from "./Input.element";

export class SelectInputElement<OptionValue extends string = string> implements InputElement<OptionValue> {
  private readonly element: HTMLSelectElement;
  constructor(private readonly container: HTMLElement, label: string) {
    this.element = getByLabelText(container, label) as HTMLSelectElement;
  }

  get value() {
    return this.element.value as OptionValue;
  }

  setValue(value: OptionValue) {
    return userEvent.selectOptions(this.element, value);
  }
}
