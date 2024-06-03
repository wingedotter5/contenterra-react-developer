import React from "react";

export default function CardSkeleton() {
  return (
    <div className="bg-[#2a3236] rounded p-4 animate-pulse grid grid-cols-1 gap-4">
      <div className="bg-[#3d494e] rounded h-8 w-3/4"></div>
      <div className="bg-[#3d494e] rounded h-32"></div>
      <div className="bg-[#3d494e] rounded h-8 w-1/4"></div>
    </div>
  );
}
