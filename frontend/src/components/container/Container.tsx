import * as React from "react";

const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-full border-[#cfcfcf] rounded-lg relative overflow-hidden">
      {children}
    </div>
  );
};

export default Container;
