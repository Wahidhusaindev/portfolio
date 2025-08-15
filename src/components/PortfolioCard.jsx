import React from "react";

export default function PortfolioCard({ emoji, title, description, tags, colorFrom, colorTo }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover">
      <div className={`h-48 bg-gradient-to-br ${colorFrom} ${colorTo} flex items-center justify-center text-white text-6xl`}>
        {emoji}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, i) => (
            <span key={i} className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">{tag}</span>
          ))}
        </div>
        <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors">
          View Project →
        </button>
      </div>
    </div>
  );
}
