import React from "react";

export default function AppDownload({ title, version, desc, id, children }: { title: string; version: string; desc: string; id: string; children: React.ReactNode }) {
  return (
    <div className="flex-1 bg-white border border-gray-200 rounded-2xl shadow-md min-w-[260px] max-w-md p-5 flex flex-col justify-between" id={id}>
      <div>
        <div className="flex items-center gap-2 mb-2">
          <h2 className="text-xl font-bold text-black">{title}</h2>
          <span className="inline-block bg-red-200 text-black text-xs font-semibold px-2 py-0.5 rounded">{version}</span>
        </div>
        <p className="mb-3 text-black text-base">{desc}</p>
      </div>
      <div className="flex gap-2 items-end content-center mt-2">{children}</div>
    </div>
  );
}
