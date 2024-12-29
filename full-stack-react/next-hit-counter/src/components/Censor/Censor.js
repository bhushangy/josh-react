"use client";
import React from "react";

export function Censor({ children }) {
  const [isCensored, setIsCensored] = React.useState(true);

  return (
    <button
      className={isCensored ? "censored" : ""}
      onClick={() => setIsCensored(!isCensored)}
    >
      {children}
    </button>
  );
}
