import React from "react";
import { useCardContext } from "./CardContext";

interface CardContentProps {
  children?: React.ReactNode;
  title?: string;
  description?: string;
}

export function CardContent({
  children,
  title,
  description,
}: CardContentProps) {
  useCardContext();

  if (children) {
    return <div className="card-content p-4">{children}</div>;
  }

  return (
    <div className="card-content p-4">
      {title && <h3 className="text-lg font-semibold">{title}</h3>}
      {description && <p className="text-sm text-gray-600">{description}</p>}
    </div>
  );
}

CardContent.displayName = "CardContent";
