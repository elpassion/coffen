import React from "react";
import { BrewStepCount, BrewStepIndicator, BrewStepLabel, BrewStepsDetails, BrewStepWrapper } from "./style";

export interface BrewStepProps {
  step: number;
  label: string;
}

export const BrewStep: React.FC<BrewStepProps> = ({ step, label, children }) => {
  return (
    <BrewStepWrapper>
      <BrewStepIndicator>
        <BrewStepCount>{step}</BrewStepCount>
        <BrewStepLabel>{label}</BrewStepLabel>
      </BrewStepIndicator>

      <BrewStepsDetails>{children}</BrewStepsDetails>
    </BrewStepWrapper>
  );
};
