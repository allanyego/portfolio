import React from "react";
import {motion} from "framer-motion";

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    // fill: "rgba(255, 255, 255, 1)"
  }
};

export const Home = () => {
  return (
    <section className="home">
      <div className="columns">
        <div className="column col-sm-12 col-md-11 col-8">
          <h1>
            Hi, <br />
            I'm Yego, <br />A software developer.
          </h1>
          <p>Full Stack / JavaScript / Python / Java / Go</p>
          <button className="btn btn-large btn-primary">Contact me</button>
        </div>
        <div className="column col-md-1 col-4">
          <div className="bg">
            <motion.svg
              viewBox="0 0 307 325"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M138 3.49999C95.6667 2.66666 9.3 1.49999 2.5 3.49999V37.5H25C25 44.7 35.3333 65.5 40.5 75L127 213.5V264.5C127 290.9 106 294.833 95.5 293.5V322.5H228.5V288.5H191.5C193.1 282.1 193.833 269.833 194 264.5V196L255.5 78C262.7 62.4 272.5 51.1667 276.5 47.5C284.9 36.7 299 33.3333 305 33V3.49999H205V37.5H238.5C233.7 43.1 229.167 51.5 227.5 55L169.5 169.5C164.3 157.5 160.333 150.833 159 149L117 78C105.8 65.2 105 52.3333 106 47.5C110.4 32.3 129.167 31.5 138 33V3.49999Z"
                stroke="black"
                strokeWidth="4"
                variants={icon}
                initial="hidden"
                animate="visible"
                transition={{
                    default: {duration: 2, ease: "easeInOut"}
                }}
              />
            </motion.svg>
          </div>
        </div>
      </div>
    </section>
  );
};
