export interface InputElement<ValueType> {
  value: ValueType;
  setValue(newValue: ValueType): void;
}
