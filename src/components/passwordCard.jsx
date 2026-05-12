import React from "react";
import { Trash } from "lucide-react";

const PasswordCard = ({record}) => {
  return (
    <div className="bg-black border-l-8 border-[#00FF41] border-r border-t border-b rounded-xl p-4 mt-4 flex flex-col gap-2 h-auto min-h-40 w-56 shadow-[0_0_10px_rgba(0,255,65,0.2)] font-mono overflow-hidden">
      <div className="w-full">
        <h1 className="text-[#00FF41] filter drop-shadow-[0_0_8px_#00FF41] text-xl md:text-2xl flex items-center gap-4 tracking-wider">
          <span>
            <img
              className="size-10 rounded-2xl"
              src="https://static.vecteezy.com/system/resources/previews/019/136/322/original/amazon-logo-amazon-icon-free-free-vector.jpg"
              alt="icon"
            />
          </span>
          {record.siteName}
        </h1>
        <div className="flex flex-col p-2 items-start w-full">
          <h1 className="text-[#b6b3b3c1] flex flex-row gap-4 w-full min-w-0">
            <span className="w-10 shrink-0">usr</span>
            <span className="text-white truncate font-medium flex-1">
              {record.userIdent}
            </span>
          </h1>
          
          <h1 className="text-[#b6b3b3c1] flex flex-row gap-4 w-full min-w-0">
            <span className="w-10 shrink-0">url</span>
            <span className="text-white truncate font-medium flex-1">
              {record.targetUrl}
            </span>
          </h1>

          <h1 className="text-[#b6b3b3c1] flex flex-row gap-4 w-full min-w-0">
            <span className="w-10 shrink-0">pwd</span>
            <span className="text-white font-medium flex-1 break-all">
              {record.passkey}
            </span>
          </h1>
        </div>
        <div className="flex justify-end">
            <button>
              <Trash className="text-[#00FF41] hover:text-[#00cc33] cursor-pointer" />
            </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordCard;