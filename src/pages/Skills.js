import React from "react";
import { Section } from "../components/Section";

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
  "RESTful API"
];

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
        <div className="column col-sm-12 col-6">
          {skills.map(skill => (
            <span className="chip" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
};
