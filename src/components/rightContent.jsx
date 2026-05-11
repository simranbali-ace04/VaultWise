import React from "react";
import PasswordCard from "./passwordCard";
const RightContent = () => {
  return (
    <div className="bg-black border border-[#00FF41] md:w-7/12 w-full h-full flex flex-col rounded-xl overflow-hidden p-4 gap-0.5 font-mono">
      <div className="shrink-0 mb-4">
        <h1 className="text-white text-2xl md:text-3xl">Stored Passwords</h1>
        <h1 className="text-[#b6b3b3c1] text-xl md:text-2xl">
          $ ls --all-passwords
        </h1>
      </div>
      <div className="min-h-0 flex-1 flex flex-wrap content-start justify-start p-2 overflow-y-auto gap-4 custom-scrollbar">
        <PasswordCard />
        <PasswordCard />
        <PasswordCard />
        <PasswordCard />
        <PasswordCard />
        <PasswordCard />
        <PasswordCard />
      </div>
    </div>
  );
};

export default RightContent;