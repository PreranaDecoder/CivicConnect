import React from 'react';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      className="flex items-center space-x-2"
      whileHover={{ scale: 1.05 }}
    >
      <svg
        className="w-8 h-8"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M20 5L35 30H5L20 5Z"
          className="fill-teal-500"
        />
        <circle
          cx="20"
          cy="20"
          r="12"
          className="fill-purple-600"
          fillOpacity="0.7"
        />
      </svg>
      <span className="text-2xl font-bold bg-gradient-to-r from-teal-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
        CivicConnect
      </span>
    </motion.div>
  );
};

export default Logo;