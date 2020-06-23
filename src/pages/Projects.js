import React, { useState, useEffect } from "react";

import { Section } from "../components/Section";

import "../style/project.scss";
import { Project } from "../components/Project";
import { getProjects } from "../getProjects";

export const Projects = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getProjects()
      .then(projects => {
        setProjects(projects);
        setLoading(false);
      })
  }, []);

  return (
    <Section title="Projects">
      <div className="columns">
        {loading && <div>Some loading div</div>}
        {projects?.length && projects.map(project => (
          <Project key={project.id} {...project} />
        ))}
      </div>
    </Section>
  );
};
