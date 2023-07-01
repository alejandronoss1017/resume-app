import React from 'react';
import { Project } from '../data/types-data';

type CardProps = {
  project: Project;
};

function Card({ project }: CardProps) {
  return (
    <div className="card-container text-center">
      <a href={project.link} target='_blank'>
        <img
          className="w-full rounded-tr-2xl rounded-tl-2xl"
          src={project.image}
          alt="project-image"
        />
        <h2 className="m-2">{project.title}</h2>
        <p className=" p-2 text-justify">{project.description}</p>
      </a>
    </div>
  );
}

export default Card;
