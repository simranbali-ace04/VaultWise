import React from "react";
import NewCredentials from "./newCredentials";

const LeftContent = () => {
  return (
    <div className="flex flex-col md:flex-row gap-5 p-4 h-full w-full">
      <NewCredentials />
    </div>
  );
};

export default LeftContent;
