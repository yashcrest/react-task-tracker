import React from "react";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1 className="text-primary">{title}</h1>
      <Button
        text={showAdd ? "Close" : "Add"}
        onClick={onAdd}
        showAdd={showAdd}
      />
    </header>
  );
};

export default Header;
