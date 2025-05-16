import React from "react";

export default function AppDownload({className, title, version, desc, id, children }: { className?: string, title: string; version: string; desc: string; id: string; children: React.ReactNode }) {
  return (
    <div className={`bg-white border border-gray-200 rounded-2xl shadow-md min-w-[260px] w-md overflow-x-auto p-5 flex flex-col justify-between ${className}`} id={id}>
      <div className="flex items-center gap-2 mb-2">
        <h3 className="text-xl font-bold text-black">{title}</h3>
        <span className="inline-block bg-red-200 text-black text-xs font-semibold px-2 py-0.5 rounded">{version}</span>
      </div>
      <p className="mb-3 text-black text-base whitespace-pre-wrap">{desc}</p>
      <div className="flex gap-2 justify-end content-center mt-2">{children}</div>
    </div>
  );
}
