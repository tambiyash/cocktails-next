"use client";
import React from 'react';
import { motion } from 'motion/react';

const Cards = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Cards;