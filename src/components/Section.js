import React from "react";
import {motion} from "framer-motion";

const sectionTitle = {
    hidden: {
        opacity: 0,
        y: -30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: .5
        }
    }
};

export const Section = ({ title, children }) => {
  return (
    <section
      style={{
        maxHeight: "100%",
      }}
    >
      <motion.h1
      variants={sectionTitle}
      initial="hidden"
      animate="visible">{title}</motion.h1>
      {children}
    </section>
  );
};
