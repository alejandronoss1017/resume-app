import React from 'react';
import Card from './card';
import { Project } from '../data/types-data';

type ProjectsProps = {
  projects: Project[];
};

function Projects({ projects }: ProjectsProps) {
  return (
    <section>
      <h2>Projects</h2>
      <hr className="mb-6 border-2" />
      <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-evenly">
        {projects.map((project, i) => (
          <Card key={i} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
