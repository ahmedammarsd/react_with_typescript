import React from "react";

interface InputInterface {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ value, handleChange }: InputInterface) => {
  return <input type="text" value={value} onChange={handleChange} />;
};

export default Input;
