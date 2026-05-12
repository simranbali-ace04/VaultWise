import React from "react";
import NewCredentials from "./newCredentials";

const LeftContent = ({ passRecord }) => {
  return (
      <NewCredentials onAddRecord={passRecord} />
  );
};

export default LeftContent;
