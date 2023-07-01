import React from 'react';
import AboutMe from './components/about-me';
import { aboutMe, professional, projects } from './data/page-data';
import ProfessionalExperience from './components/professional-experience';
import Projects from './components/projects';

//Here should be the code for main page, the part next to the aside
export default function Home() {
  return (
    <div>
      <AboutMe aboutMe={aboutMe}></AboutMe>
      <ProfessionalExperience professional={professional} />
      <Projects projects={projects} />
    </div>
  );
}
