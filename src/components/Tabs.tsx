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

Tabs.Buttons = ({ children, ButtonsContainer }: TabsButtonsProps) => {
  const Container = ButtonsContainer ?? "menu";
  return <Container>{children}</Container>;
};

Tabs.Content = ({ children }: { children: ReactNode }) => {
  return <>{children}</>;
};
