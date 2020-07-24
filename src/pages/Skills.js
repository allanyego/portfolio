import React from "react";
import { Section } from "../components/Section";
import { motion } from "framer-motion";

const skills = [
  "TypeScript",
  "NoSQL",
  "PostgreSQL",
  "Jest",
  "HTML5",
  "JavaScript",
  "Python",
  "Java",
  "Git",
  "Angular",
  "JSON",
  "RESTful API",
];

const container = {
  hidden: {
    opacity: 0,
    y: -20,
  },

  visible: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export const Skills = () => {
  return (
    <Section title="Skills & expertise">
      <div className="columns">
        <div className="column col-sm-12 col-6">
          <p>
            My main area of expertise is JavaScript developing small to medium
            scale systems leveraging the strong ecosystem of frameworks (React,
            Vue, Angular, Express).
          </p>
          <p>
            Recently, I explored the mobile app development platform with Ionic,
            React Native and some Java.
          </p>
          <p>
            I have managed deployment of products through devop tools like
            Circle CI and Travis CI.
          </p>
          <p>Find me on LinkedIn or just contact me.</p>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="column col-sm-12 col-6"
        >
          {skills.map((skill) => (
            <motion.span className="chip" key={skill} variants={item}>
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
