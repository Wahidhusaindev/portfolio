import React from "react";

export default function SkillBar({ title, percent, color }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-gray-700">{title}</span>
        <span className="text-gray-500">{percent}</span>
      </div>
      <div className="bg-gray-200 rounded-full h-2">
        <div className={`${color} h-2 rounded-full`} style={{ width: percent }}></div>
      </div>
    </div>
  );
}
