import React from "react";

import CardSkeleton from "./CardSkeleton";

const items = Array(5).fill(null);

export default function ListSkeleton() {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((_, id) => (
        <li key={id}>
          <CardSkeleton />
        </li>
      ))}
    </ul>
  );
}
