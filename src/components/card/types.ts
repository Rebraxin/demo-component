import { ReactNode } from "react";

export type CardProps = {
  children: ReactNode;
};

export type CardMediaProps = {
  children?: ReactNode;
  src?: string;
  alt?: string;
};

export type CardContentProps = {
  children?: ReactNode;
  title?: string;
  description?: string;
};

export type CardActionsProps = {
  href: string;
};

export type CardProviderProps = {
  children: ReactNode;
};
