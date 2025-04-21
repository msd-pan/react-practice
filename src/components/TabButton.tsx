type TabButtonProps = {
  children: React.ReactNode;
};

const TabButton = ({ children }: TabButtonProps) => {
  return (
    <li>
      <button>{children}</button>
    </li>
  );
};

export default TabButton;
