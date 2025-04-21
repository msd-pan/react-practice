type TabButtonProps = {
  children: React.ReactNode;
  onSelect: () => void;
};

const TabButton = ({ children, onSelect }: TabButtonProps) => {
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
};

export default TabButton;
