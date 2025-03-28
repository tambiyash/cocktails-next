"use client";
import React from 'react';
import { motion } from 'motion/react';

const Tag = ({ label, otherClassName }: { label: string; otherClassName: string }) => {
  return (
    <motion.span
      className={`px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm ${otherClassName}`}
      whileHover={{
        rotate: [0, 10, -10, 10, 0], // Wiggle effect
      }}
      transition={{ duration: 0.1 }} // Smooth transition for the wiggle
    >
      {label}
    </motion.span>
  );
};

export default Tag;