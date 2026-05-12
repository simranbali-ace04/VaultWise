import React from "react";
import PasswordCard from "./passwordCard";
import { Trash } from "lucide-react";
const RightContent = ({ vault }) => {
  return (
    <div className="bg-black border-[#00FF41] border rounded-xl p-4 flex flex-col gap-2  min-h-40 w-full md:w-3/5 shadow-[0_0_10px_rgba(0,255,65,0.2)] font-mono overflow-hidden">
        <div className="shrink-0">
        <h1 className="text-white text-xl md:text-2xl">Stored Passwords</h1>
        <h1 className="text-[#b6b3b3c1] text-sm md:text-lg">$ ls --all-passwords</h1>
      </div>
        <div className="flex-1 md:min-h-0 md:overflow-y-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            <div className="flex flex-wrap content-start justify-center md:justify-start gap-5 p-1 pb-10">
          {vault.map((elem, index) => (
            <PasswordCard key={index} record={elem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RightContent;