import { Status } from "@/characters/interfaces/characters-response";
import React from "react";

interface Props {
  status: Status;
}

export const StatusCharacter = ({ status }: Props) => {
  return (
    <span className="text-slate-500 rounded-xl border-slate-100 text-sm font-semibold mt-2 pl-3 pr-3 border-[1px] flex items-center">
      <span className="relative flex h-3 w-3 mr-1">
        <span
          className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
            status === "Alive"
              ? "bg-green-600"
              : status === "Dead"
              ? "bg-red-700"
              : "bg-gray-500"
          } opacity-75`}
        ></span>
        <span
          className={`relative inline-flex rounded-full h-3 w-3 ${
            status === "Alive"
              ? "bg-green-600"
              : status === "Dead"
              ? "bg-red-700"
              : "bg-gray-500"
          }`}
        ></span>
      </span>
      {status}
    </span>
  );
};
