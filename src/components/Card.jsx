import React from "react";
import Markdown from "react-markdown";

export default function Card({ item }) {
  return (
    <div className="bg-[#2a3236] rounded p-4 overflow-auto">
      <h2 className="text-2xl font-bold py-2 border-b">{item?.data?.title}</h2>
      <Markdown>{item?.data?.selftext}</Markdown>
      <div className="flex gap-4 items-center py-2">
        <div className="bg-[#3d494e] py-1 px-4 text-center rounded-full">
          Score {item?.data?.score}
        </div>
        <a
          className="hover:text-[#9e9eff] outline outline-1 py-1 px-4 outline-[#9e9eff] rounded-full"
          target="_blank"
          href={item?.data?.url}
        >
          More
        </a>
      </div>
    </div>
  );
}
