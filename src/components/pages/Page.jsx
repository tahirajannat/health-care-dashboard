import React from "react";

export default function Page({ children }) {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-12 gap-6">{children}</div>
    </div>
  );
}
