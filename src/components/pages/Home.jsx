import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import img from "../../assets/img.png"; // Adjust the path if needed
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();

  // Typing effect setup
  const roles = ["Front End Developer", "Web Developer", "Tech Enthusiast", "Nature Lover"];
  const [currentText, setCurrentText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 50 : 100; // faster delete

    const typing = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setCurrentText(currentRole.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText(currentRole.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1500); // pause before delete
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((roleIndex + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(typing);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const goToSection = (path, sectionId) => {
    navigate(path);
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  // Animation Variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <>
      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
      >
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="text-center px-6"
        >
          {/* Profile Image */}
          <motion.div variants={item}>
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-32 h-32 mx-auto mb-8 rounded-full"
              src={img}
              alt="Wahid Husain"
            />
          </motion.div>

          {/* Name */}
          <motion.h1
            variants={item}
            className="text-5xl font-bold mb-6"
          >
            Wahid Husain
          </motion.h1>

          {/* Typing Text */}
          <motion.p variants={item} className="mb-8 text-2xl h-8">
            {currentText}
            <span className="border-r-2 border-white animate-pulse"></span>
          </motion.p>

          {/* Buttons */}
          <motion.div variants={item} className="space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => goToSection("/portfolio", "portfolio")}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold"
            >
              View My Work
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => goToSection("/contact", "contact")}
              className="border-2 border-white px-8 py-3 rounded-full font-semibold"
            >
              Get In Touch
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <About />
      </motion.section>

      {/* Portfolio Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Portfolio />
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <Contact />
      </motion.section>
    </>
  );
}
