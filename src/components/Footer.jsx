import React from "react";
import { FaGithub,FaLinkedinIn} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p>&copy; 2024 Wahid Husain. All rights reserved.</p>
        <div className="mt-4 space-x-6 flex justify-center">
          <Link to="https://github.com/wahidhusaindev" target="_blank" className="text-gray-400 hover:text-white"><FaGithub  className="w-7 h-7"/></Link>
          <Link to="https://www.linkedin.com/in/wahid-husain-dev/" target="_blank" className="text-gray-400 hover:text-white"><FaLinkedinIn  className="w-7 h-7"/></Link>
          <Link to="#" className="text-gray-400 hover:text-white"><FaSquareXTwitter  className="w-7 h-7"/></Link>
          <Link to="#" className="text-gray-400 hover:text-white"><SiLeetcode  className="w-7 h-7"/></Link>
          
        </div>
      </div>
    </footer>
  );
}
