import React, { createContext, useContext } from "react";
import { CardProviderProps } from "./types";

const CardContext = createContext(false);

export function useCardContext() {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error("This component must be used within a <CardProvider>.");
  }
  return context;
}

export function CardProvider({ children }: CardProviderProps) {
  return <CardContext.Provider value={true}>{children}</CardContext.Provider>;
}
