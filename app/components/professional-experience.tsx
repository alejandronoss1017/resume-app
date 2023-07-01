import React from 'react';
import { Professional } from '../data/types-data';

type ProfessionalExperienceProps = {
  professional: Professional;
};

const ProfessionalExperience = ({
  professional
}: ProfessionalExperienceProps) => {
  const { title, experiences } = professional;
  return (
    <section>
      <h2>{title}</h2>
      <hr className="mb-6 border-2" />
      {experiences.map((experience, i) => (
        <div key={i} className="mb-6">
          <h3 className="mb-2">{experience.role}</h3>
            <ul>
              {experience.description.map((item, i) => (
                <li key={i} className="mb-2 list-inside text-justify">
                  {item}
                </li>
              ))}
            </ul>
        </div>
      ))}
    </section>
  );
};

export default ProfessionalExperience;
