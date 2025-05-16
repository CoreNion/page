import React from "react";

export default function AppFeature({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="p-5 bg-white border border-gray-200 rounded-2xl shadow-md flex-1 grow min-w-[260px]">
      <h3 className="text-2xl font-bold text-black mb-2">{title}</h3>
      <div className="text-black text-base">{children}</div>
    </div>
  );
}
