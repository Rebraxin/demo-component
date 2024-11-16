import React from "react";
import { CardProvider } from "./CardContext";
import { validateChildrenOrder } from "./validateChildrenOrder";
import { CardProps } from "./types";

export function Card({ children }: CardProps) {
  return (
    <CardProvider>
      <div className="card border rounded-lg shadow-md overflow-hidden">
        {validateChildrenOrder(children)}
      </div>
    </CardProvider>
  );
}
