import { ReactNode } from "react";

type TabsProps = {
  children: ReactNode;
};

export const Tabs = ({ children }: TabsProps) => {
  return <>{children}</>;
};

Tabs.Buttons = ({ children }: { children: ReactNode }) => {
  return <menu>{children}</menu>;
};

Tabs.Content = ({ children }: { children: ReactNode }) => {
  return <section>{children}</section>;
};
