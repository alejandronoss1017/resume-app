import React from 'react';
import AboutMe from './components/about-me';
import { aboutMe, skills, professional } from './data/page-data';
import ProfessionalExperience from './components/professional-experience';

//Here should be the code for main page, the part next to the aside
export default function Home() {
  return (
    <div>
      <AboutMe aboutMe={aboutMe}></AboutMe>
      <ProfessionalExperience />
    </div>
  );
}
