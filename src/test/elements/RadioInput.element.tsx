import { fireEvent, getByLabelText, getByTitle } from "@testing-library/react";
import { InputElement } from "./Input.element";

export class RadioInputElement<OptionValue extends string = string> implements InputElement<OptionValue> {
  private readonly element: HTMLSelectElement;
  constructor(private readonly container: HTMLElement, title: string, private readonly exact: boolean = true) {
    this.element = getByTitle(container, title) as HTMLSelectElement;
  }

  get value() {
    return this.element.value as OptionValue;
  }

  setValue(value: OptionValue) {
    fireEvent.click(getByLabelText(this.element, value, { exact: !!this.exact }));
  }
}
