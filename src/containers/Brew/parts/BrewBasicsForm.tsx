import { BrewStep } from "components/BrewStep";
import { SelectField, SelectFieldOption } from "components/Form/SelectField";
import { TextField } from "components/Form/TextField";
import { ErrorsForValues } from "components/Form/types";
import { CupIcon } from "components/Svg/CupIcon";
import { rem, rgba } from "polished";
import React from "react";
import { Field, Form, FormSpy } from "react-final-form";
import styled from "styled-components";
import { colorName } from "styles";
import { BrewingProcess, BrewingTechnique } from "../options";

export interface BrewingBasicsFormValues {
  origin: string;
  roaster: string;
  technique: BrewingTechnique;
  process: BrewingProcess;
}

interface BrewBasicsFormProps {
  onSubmit(brewingBasics: BrewingBasicsFormValues): void;
}

export const BrewBasicsForm: React.FC<BrewBasicsFormProps> = ({ onSubmit }) => {
  return (
    <Form<BrewingBasicsFormValues>
      onSubmit={onSubmit}
      validate={values => {
        const errors: ErrorsForValues<BrewingBasicsFormValues> = {};
        if (!values.origin) errors.origin = "Required";
        if (!values.roaster) errors.roaster = "Required";
        if (!values.technique) errors.technique = "Required";
        if (!values.process) errors.process = "Required";
        return errors;
      }}
      render={({ handleSubmit, values }) => (
        <form onSubmit={handleSubmit}>
          <FormSpy
            subscription={{ valid: true, values: true }}
            onChange={({ valid, values }) => {
              valid && onSubmit(values as BrewingBasicsFormValues);
            }}
          />
          <BrewStep step={1} label="Coffee">
            <TextField name="origin" label="Origin" />
            <br />
            <TextField name="roaster" label="Roaster" />
            <br />
          </BrewStep>

          {values.origin && values.roaster && (
            <BrewStep step={2} label="Technique">
              <TechniqueField />
            </BrewStep>
          )}
          {values.technique && (
            <BrewStep step={3} label="Method">
              <SelectField name="process" label="Process" initialValue="">
                <SelectFieldOption value={""}></SelectFieldOption>
                <br />
                <SelectFieldOption value={BrewingProcess.HarioV60}>{BrewingProcess.HarioV60}</SelectFieldOption>
                <br />
              </SelectField>
            </BrewStep>
          )}
        </form>
      )}
    />
  );
};

const RadioInputWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const RadioInput = styled.div`
  width: calc(25% - 4px);
  label {
    display: block;
    width: 100%;
    box-shadow: ${rem(4)} ${rem(2)} ${rem(16)} ${rgba(colorName.shadows, 0.55)},
      ${rem(-4)} ${rem(-2)} ${rem(16)} ${colorName.white};
    border: 1px solid transparent;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: ${rem(8)};
    text-align: center;
    padding: ${rem(8)} 0;

    & > svg {
      display: block;
      width: ${rem(24)};
      height: ${rem(24)};

      & + span {
        margin-bottom: ${rem(8)};
      }
    }
  }

  input {
    visibility: hidden;
  }

  input:checked + label {
    border: 1px solid ${colorName.red};
  }
`;

export const TechniqueField = () => {
  return (
    <RadioInputWrapper>
      <TechniqueFieldOption value={BrewingProcess.HarioV60} />
      <TechniqueFieldOption value={BrewingProcess.Wave} />
      <TechniqueFieldOption value={BrewingProcess.AeroPress} />
      <TechniqueFieldOption value={BrewingProcess.FrenchPress} />
    </RadioInputWrapper>
  );
};

const TechniqueFieldOption: React.FC<{ value: BrewingProcess }> = ({ value }) => {
  return (
    <RadioInput>
      <Field id={`technique-${value}`} name="technique" component="input" type="radio" value={value} />
      <label htmlFor={`technique-${value}`}>
        <CupIcon />
        <span>{value}</span>
      </label>
    </RadioInput>
  );
};
