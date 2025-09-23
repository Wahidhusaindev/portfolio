import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto ">
            I’m an aspiring full-stack web developer, currently learning at{" "}
            <strong>AlmaBetter</strong>, passionate about building impactful and
            user-friendly digital experiences.
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Journey */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg"
          >
            <div className="text-6xl mb-4 text-center">🚀</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">My Journey</h3>
            <p className="text-gray-600 mb-6">
              Started as a curious learner, I gradually evolved into a
              full-stack developer. My journey includes mastering frontend
              frameworks, backend technologies, and creating projects that solve
              real-world problems.
            </p>

            {/* Progress Bars */}
            <div className="space-y-6">
              {/* React */}
              <div>
                <p className="text-sm font-medium text-gray-700">React</p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "90%" }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="h-3 bg-blue-600 rounded-full"
                  />
                </div>
                <span className="text-xs text-gray-500">90%</span>
              </div>

              {/* Node.js */}
              <div>
                <p className="text-sm font-medium text-gray-700">Node.js</p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "85%" }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="h-3 bg-green-600 rounded-full"
                  />
                </div>
                <span className="text-xs text-gray-500">85%</span>
              </div>

              {/* JavaScript */}
              <div>
                <p className="text-sm font-medium text-gray-700">JavaScript</p>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "70%" }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="h-3 bg-yellow-400 rounded-full"
                  />
                </div>
                <span className="text-xs text-gray-500">70%</span>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Skills Badges with Logos */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl shadow-lg p-8 flex flex-wrap gap-4 justify-center"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-2">
              Technical Skills & Tools
            </h3>
            <p className="mt-2 text-bold text-gray-600 text-center text-left max-w-md">
              I work with a wide range of technologies to build full-stack web applications. 
              My experience spans across personal projects, coursework, and continuous
              hands-on learning to stay up-to-date with modern development practices.
            </p>

            {[
              {
                name: "React",
                logo:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
              },
              {
                name: "Node.js",
                logo:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
              },
              {
                name: "Express",
                logo:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
              },
              {
                name: "MongoDB",
                logo:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
              },
              {
                name: "Python",
                logo:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
              },
              {
                name: "JavaScript",
                logo:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
              },
              {
                name: "Tailwind CSS",
                logo:
                  "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/tailwindcss.svg",
              },
              {
                name: "Git & GitHub",
                logo:
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
              },
              {
                name: "REST APIs",
                logo:
                  "https://img.icons8.com/ios-filled/50/000000/api-settings.png",
              },
            ].map((skill, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="flex flex-col items-center bg-white rounded-xl px-4 py-3 shadow hover:scale-105 transition w-28"
              >
                <img
                  src={skill.logo}
                  alt={skill.name ? `${skill.name} logo` : "Skill logo"}
                  className="h-10 mb-2"
                  style={{ objectFit: "contain" }}
                  loading="lazy"
                />
                <span className="text-xs font-medium text-gray-700 text-center">
                  {skill.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
