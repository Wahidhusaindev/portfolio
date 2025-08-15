import React from "react";
import SkillBar from "../Skillbar";

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I’m an aspiring full-stack web developer, currently learning at <strong>AlmaBetter</strong>, passionate about building impactful and user-friendly digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
            <div className="text-6xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">My Journey</h3>
            <p className="text-gray-600 mb-6">
              Started as a curious student, evolved into a full-stack developer...
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">React</span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Node.js</span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Python</span>
              <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">JavaScript</span>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Skills</h3>
            <SkillBar title="Frontend Development" percent="90%" color="bg-blue-600" />
            <SkillBar title="Backend Development" percent="85%" color="bg-green-600" />
            <SkillBar title="UI/UX Design" percent="80%" color="bg-purple-600" />
          </div>
        </div>
      </div>
    </section>
  );
}
