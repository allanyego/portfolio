import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Section } from "../components/Section";
import "../style/project.scss";

const projects = [
  {
    name: "E-hosi"
  },
  {
    name: "Ride Easy"
  },
  {
    name: "Orient Insurance"
  },
  {
    name: "E-booking"
  }
];

export const Projects = () => {
  return (
    <Section title="Projects">
      <div className="columns">
        {projects.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
    </Section>
  );
};

function Project({ project }) {
  return (
    <div className="column col-3">
      <div className="card project-card">
        <div className="card-header">
          <h3>{project.name}</h3>
          <div className="card-subtitle text-gray">
            Check it <FontAwesomeIcon icon="external-link-alt" />
          </div>
        </div>
        <div className="card-body">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution
        </div>
        <div className="card-footer">
          <span className="chip">JS</span>
        </div>
      </div>
    </div>
  );
}
