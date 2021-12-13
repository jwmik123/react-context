import React, { useContext } from "react";

import { ProjectContext } from "../context/projectContext";
import Project from "../components/Project/Project";

const Projects = () => {
  const { projects } = useContext(ProjectContext);

  return (
    <div>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default Projects;
