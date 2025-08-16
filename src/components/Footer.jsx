import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";

export default function Footer() {
  const socials = [
    {
      icon: <FaGithub className="w-7 h-7" />,
      url: "https://github.com/wahidhusaindev",
    },
    {
      icon: <FaLinkedinIn className="w-7 h-7" />,
      url: "https://www.linkedin.com/in/wahid-husain-dev/",
    },
    {
      icon: <FaSquareXTwitter className="w-7 h-7" />,
      url: "https://x.com/", // replace with your Twitter
    },
    {
      icon: <SiLeetcode className="w-7 h-7" />,
      url: "https://leetcode.com/", // replace with your Leetcode
    },
  ];

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} Wahid Husain. All rights reserved.
        </p>

        <div className="mt-4 flex justify-center gap-6">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
