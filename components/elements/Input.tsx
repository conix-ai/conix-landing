import React from "react";

export type InputProps = {
  name: string;
  type?: React.HTMLInputTypeAttribute;
  placeholder?: string;
  varient?: "filled" | "outlined" | "unstyled";
  value?: string | number | readonly string[] | undefined;
  onChange?: (value: any) => void;
};

const Input = (props: InputProps) => {
  const { name, type, placeholder, varient, value, onChange } = props;

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value);
  };
  return (
    <input
      type={type}
      id={name}
      className="input"
      placeholder={placeholder}
      value={value}
      onChange={change}
    />
  );
};

export default Input;
