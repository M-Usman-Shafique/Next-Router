// Parallel Route
"use client";
import { useState } from "react";

export default function SandboxLayout({ children, left, right }) {
  const [isSidebar, setIsSidebar] = useState(true);
  return (
    <section className="flex flex-col gap-8 items-center justify-center h-screen bg-blue-950 text-white">
      <h1 className="text-7xl font-semibold">{children}</h1>
      <h2 className="text-4xl font-semibold">(PARALLEL ROUTE)</h2>
      <h1 className="text-7xl font-semibold">{isSidebar ? right : left}</h1>
      <button
        onClick={() => setIsSidebar(!isSidebar)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {isSidebar ? "Goto Left" : "Goto Right"}
      </button>
    </section>
  );
}
