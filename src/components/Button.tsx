import React from "react";

interface ButtonProps {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  text: "Show Title" | "Hide Title";
}

const Button = ({ handleClick, text }: ButtonProps) => {
  return <button onClick={handleClick}>{text}</button>;
};

export default Button;
