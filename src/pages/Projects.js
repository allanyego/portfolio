import React, { useState, useEffect } from "react";

import { Section } from "../components/Section";
import { Project } from "../components/Project";
import { getProjects } from "../getProjects";
import ProjectPage from "./Project";

export const Projects = () => {
  const [projects, setProjects] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    getProjects().then((projects) => {
      setProjects(projects);
      setLoading(false);
    });
  }, []);

  return (
    <Section title="Projects">
      <div className="columns">
        {loading && <div>Some loading div</div>}
        {projects?.length &&
          projects.map((project) => <Project key={project.id} {...project} />)}
      </div>
      <ProjectPage />
    </Section>
  );
};
