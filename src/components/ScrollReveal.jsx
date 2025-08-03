import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const ScrollReveal = ({
  children,
  delay = 0.1,
  duration = 0.6,
  y = 30,
  x = 0,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const variants = {
    hidden: { opacity: 0, y, x },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration, delay },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
