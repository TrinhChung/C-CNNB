import React from "react";
import { motion } from "framer-motion";

const CardAnimated = ({ children, index }) => {
  return (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ type: "spring", duration: 1 }}
      style={{ width: "100%" }}
    >
      {children}
    </motion.div>
  );
};

export default CardAnimated;
