import React from "react";
import { Vault } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="font-mono flex flex-row p-2 items-center justify-between px-10">
      <div className="flex flex-row">
      <Vault className="text-[#b6b3b3c1] h-28 w-24" />
      <div className="flex flex-col p-2">
        <h1 className="text-[#00FF41] text-6xl tracking-widest">VAULTWISE</h1>
        <h1 className="text-[#b6b3b3c1] mt-1 text-xl ">
          // SECURE_SHELL v4.1.6
        </h1>
      </div>
      </div>
      <h1 className="text-[#b6b3b3c1] text-2xl">root@vault:~$
      <span style={{ animation: 'pulse 0.7s step-end infinite' }}>█</span>
      </h1>
      <input
        type="text"
        className="p-1 border-2 rounded-b-sm border-[#b6b3b3c1] bg-[#b6b3b31a] text-[#b6b3b3a9] text-xl"
        placeholder="grep -i query..."
      />
    </nav>
  );
};

export default Navbar;
