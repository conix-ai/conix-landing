import React from "react";
import Input from "./Input";

export type FieldProps = {
  name: string;
  label?: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  varient?: "filled" | "outlined" | "unstyled";
  value?: string | number | readonly string[] | undefined;
  onChange?: (value: any) => void;
  children?: JSX.Element;
  error?: string;
};

const Field = (props: FieldProps) => {
  const { name, label, varient, children, error } = props;

  return (
    <div className="field">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      {children}
      {!children && <Input {...props}></Input>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
};

export default Field;
