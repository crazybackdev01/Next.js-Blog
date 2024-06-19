import React from "react";

function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[1100px] flex flex-col min-h-screen mx-auto bg-white border-l border-r">
      {children}
    </div>
  );
}

export default Container;
