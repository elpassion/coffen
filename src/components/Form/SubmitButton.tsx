import React from "react";
import { useFormState } from "react-final-form";

interface SubmitButtonProps {
  title: string;
}

export const SubmitButton: React.FC<SubmitButtonProps> = ({ title, children }) => {
  const { submitting, valid } = useFormState();

  return (
    <button type="submit" title={title} disabled={submitting || !valid}>
      {children}
    </button>
  );
};
