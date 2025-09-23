import React from "react";
import { motion } from "framer-motion";
import PortfolioCard from "../PortfolioCard";

export default function Portfolio() {
  const projects = [
    {
      emoji: "🛍️",
      title: "E-Commerce Platform",
      description: "A modern e-commerce solution with cart, checkout & payments",
      tags: ["React", "Node.js", "MongoDB"],
      colorFrom: "from-blue-400",
      colorTo: "to-blue-600",
      link: "https://github.com/yourusername/ecommerce",
    },
    {
      emoji: "📱",
      title: "Mobile App Design",
      description: "UI/UX design for a fitness tracking app",
      tags: ["Figma", "UI/UX"],
      colorFrom: "from-purple-400",
      colorTo: "to-purple-600",
      link: "https://www.figma.com/yourdesign",
    },
    {
      emoji: "📊",
      title: "Analytics Dashboard",
      description: "Real-time dashboard with interactive charts",
      tags: ["Vue.js", "D3.js"],
      colorFrom: "from-green-400",
      colorTo: "to-green-600",
      link: "https://github.com/yourusername/dashboard",
    },
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            My Portfolio
          </h2>
          <p className="text-xl text-gray-600">
           A showcase of my hands-on projects that demonstrate the practical application of full-stack technologies, problem-solving skills, and my ability to deliver functional and user-friendly solutions.
           </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="transform transition hover:scale-105"
            >
              <PortfolioCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
