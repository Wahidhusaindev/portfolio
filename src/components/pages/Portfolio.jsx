import React from "react";
import PortfolioCard from "../PortfolioCard";

export default function Portfolio() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My Portfolio</h2>
          <p className="text-xl text-gray-600">Here are some of my recent projects</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PortfolioCard emoji="🛍️" title="E-Commerce Platform" description="A modern e-commerce solution" tags={["React", "Node.js"]} colorFrom="from-blue-400" colorTo="to-blue-600" />
          <PortfolioCard emoji="📱" title="Mobile App Design" description="UI/UX design for fitness app" tags={["Figma", "UI/UX"]} colorFrom="from-purple-400" colorTo="to-purple-600" />
          <PortfolioCard emoji="📊" title="Analytics Dashboard" description="Real-time dashboard for metrics" tags={["Vue.js", "D3.js"]} colorFrom="from-green-400" colorTo="to-green-600" />
        </div>
      </div>
    </section>
  );
}
