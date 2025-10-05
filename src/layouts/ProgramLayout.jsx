
import React from "react";
import { Outlet } from "react-router-dom";

const ProgramLayout = () => {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Programs</h1>

      {/* 👇 This is where UndergraduatePrograms or ProgramDetails will load */}
      <Outlet />
    </div>
  );
};

export default ProgramLayout;
