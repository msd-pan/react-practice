type TabButtonProps = {
  children: React.ReactNode;
};

const TabButton = ({ children }: TabButtonProps) => {
  const handleClick = () => {
    console.log("hello world");
  };

  return (
    <li>
      <button onClick={handleClick}>{children}</button>
    </li>
  );
};

export default TabButton;
