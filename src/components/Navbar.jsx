import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-600 hover:text-blue-600";

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">Wahid Husain</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>
          <NavLink to="/portfolio" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 text-2xl">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-sm shadow-lg px-6 py-4 space-y-4">
          <NavLink to="/" className={linkClass} onClick={toggleMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className={linkClass} onClick={toggleMenu}>
            About
          </NavLink>
          <NavLink to="/Projects" className={linkClass} onClick={toggleMenu}>
            Portfolio
          </NavLink>
          <NavLink to="/contact" className={linkClass} onClick={toggleMenu}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}
