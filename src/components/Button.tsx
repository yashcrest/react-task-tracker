import React from "react";

type ButtonProps = {
  style?: React.CSSProperties; // default properties that comes with React
  onClick: () => void;
  showAdd: boolean;
  text: string;
};

const Button = ({ text, onClick, showAdd }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={showAdd ? "btn btn-danger" : "btn btn-warning"}
    >
      {text}
    </button>
  );
};

export default Button;
