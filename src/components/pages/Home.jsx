import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import img from "../../assets/img.png"; // Adjust the path as necessary

export default function Home() {
  const navigate = useNavigate();

  const roles = ["Front End Developer", "Web Developer", "Tech Enthusiast", "Problem Solver"];
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
    }, 300); // wait for page to render
  };

  return (
    <>
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
    >
      <div className="text-center px-6 animate-fadeIn">
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-white/20 flex items-center justify-center text-6xl">
          <img className="rounded-full" src={img} alt="Wahid Husain"/>
        </div>
        <h1 className="text-5xl font-bold mb-6">Wahid Husain</h1>
        <p className="mb-8 text-2xl h-8">
          {currentText}
          <span className="border-r-2 border-white animate-pulse"></span>
        </p>
        <div className="space-x-4">
          <button
            onClick={() => goToSection("/portfolio", "portfolio")}
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold"
          >
            View My Work
          </button>
          <button
            onClick={() => goToSection("/contact", "contact")}
            className="border-2 border-white px-8 py-3 rounded-full font-semibold"
          >
            Get In Touch
          </button>
        </div>
      </div>
    </section>
    <About />
    <Portfolio />
    <Contact />
    </>
  );
}
