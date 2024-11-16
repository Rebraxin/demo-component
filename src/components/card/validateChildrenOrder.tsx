import React, { ReactNode } from "react";

export function validateChildrenOrder(children: ReactNode) {
  const validOrder = ["CardMedia", "CardContent", "CardAction"];

  const childrenArray = React.Children.toArray(children);

  const invalidChild = childrenArray.find(
    (child, index) =>
      !React.isValidElement(child) ||
      (child.type as any).displayName !== validOrder[index]
  );

  if (invalidChild) {
    throw new Error(
      `Invalid order of children in Card. Expected order is: ${validOrder.join(
        ", "
      )}.`
    );
  }

  return children;
}
