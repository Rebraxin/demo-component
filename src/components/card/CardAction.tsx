import React from "react";
import { useCardContext } from "./CardContext";

interface CardActionProps {
  href: string;
}

export function CardAction({ href }: CardActionProps) {
  useCardContext();

  return (
    <div className="card-action p-4">
      <a
        href={href}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Voir plus
      </a>
    </div>
  );
}

CardAction.displayName = "CardAction";
