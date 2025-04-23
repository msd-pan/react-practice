import { JSX, ReactNode } from "react";

type TabsProps = {
  children: ReactNode;
};

export const Tabs = ({ children }: TabsProps) => {
  return <>{children}</>;
};

type TabsButtonsProps = {
  children: ReactNode;
  ButtonsContainer?: keyof JSX.IntrinsicElements;
};

Tabs.Buttons = ({ children, ButtonsContainer = "menu" }: TabsButtonsProps) => {
  return <ButtonsContainer>{children}</ButtonsContainer>;
};

Tabs.Content = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};
