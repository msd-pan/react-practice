import { HTMLAttributes, ReactNode } from "react";

type TabButtonProps = {
  children: ReactNode;
  isSelected: boolean;
} & HTMLAttributes<HTMLElement>;

export const TabButton = ({
  children,
  isSelected,
  ...props
}: TabButtonProps) => {
  return (
    <li>
      <button className={isSelected ? "active" : undefined} {...props}>
        {children}
      </button>
    </li>
  );
};
