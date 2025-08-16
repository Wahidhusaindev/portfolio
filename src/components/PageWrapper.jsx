import { motion } from "framer-motion";

export default function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}     // start below
      animate={{ opacity: 1, y: 0 }}      // fade in + move up
      exit={{ opacity: 0, y: -20 }}       // fade out + move up
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
import React, { useRef, useState } from "react";