import React from "react";
import { useCardContext } from "./CardContext";
import { CardMediaProps } from "./types";

export function CardMedia({ children, src, alt }: CardMediaProps) {
  useCardContext();

  if (children) {
    return <div className="card-media w-full h-[250px]">{children}</div>;
  }

  if (src && alt) {
    return (
      <div className="card-media w-full h-[250px]">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    );
  }

  throw new Error("CardMedia requires either a child or src/alt props.");
}

CardMedia.displayName = "CardMedia";
