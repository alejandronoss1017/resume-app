import React, { useId } from 'react';
import { AboutMe } from '../data/types-data';
import { skills } from '../data/page-data';
import SkillsSection from './skills';

// We define the type of props that our component will receive
type AboutMeProps = {
  aboutMe: AboutMe;
};

const AboutMe = ({ aboutMe }: AboutMeProps) => {
  const id = useId();
  const { title, body } = aboutMe;

  /**
   * Map over the body array and return a paragraph for each item,
   * using the index as the key.
   *
   * We use the useId hook to generate a unique id for the component, have
   * to do this because we are using the same component multiple times on the page.
   *
   * This will render the body array as a list of paragraphs.
   *
   */
  const bodyList: JSX.Element[] = body.map((item, i) => (
    <p key={`${id}_${i}`} className="mb-6">
      {item}
    </p>
  ));

  return (
    //Section is a semantic HTML element that represents a section of a page.
    <section>
      <h2 className="mb-8">{title}</h2>
      {bodyList}
      <SkillsSection skills={skills}></SkillsSection>
    </section>
  );
};

export default AboutMe;
