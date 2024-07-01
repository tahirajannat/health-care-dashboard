import React from "react";

export default function HeaderLogo() {
  return (
    <div className="flex-shrink-0 hidden xl:block">
      <img
        className="object-fill max-w-full w-40"
        src="/src/assets/TestLogo.png"
        alt="Tech.Care logo"
      />
    </div>
  );
}
