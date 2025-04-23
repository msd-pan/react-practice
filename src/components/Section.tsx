import { HTMLAttributes, ReactNode } from "react";

type SectionProps = {
  title: string;
  children: ReactNode;
} & HTMLAttributes<HTMLElement>;

export const Section = ({ title, children, ...props }: SectionProps) => {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};
