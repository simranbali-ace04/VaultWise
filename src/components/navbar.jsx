import React from "react";
import { Vault } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="font-mono flex flex-col md:flex-row p-2 items-center justify-between px-10 w-full">
      <div className="flex flex-row gap-4 items-center">
      <Vault className="text-[#b6b3b3c1] h-28 w-24 sm:h-20 sm:w-20" />
      <div className="flex flex-col p-2">
        <h1 className="text-[#00FF41] text-3xl md:text-6xl tracking-widest">VAULTWISE</h1>
        <h1 className="text-[#b6b3b3c1] mt-1 md:text-xl ">
          // SECURE_SHELL v4.1.6
        </h1>
      </div>
      </div>
      <h1 className="text-[#b6b3b3c1] md:text-2xl">root@vault:~$
      <span className="cursor">█</span>
      </h1>
      <input
        type="text"
        className="p-1 border-2 rounded-b-sm border-[#b6b3b3c1] bg-[#b6b3b31a] text-[#b6b3b3a9] text-xl w-full md:w-64"
        placeholder="grep -i query..."
      />
    </nav>
  );
};

export default Navbar;
