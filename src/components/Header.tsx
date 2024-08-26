import Button from "./Button";

type HeaderProps = {
  onAdd: () => void;
  showAdd: boolean;
};

const Header = ({ onAdd, showAdd }: HeaderProps) => {
  const title: string = "Task Tracker";
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
