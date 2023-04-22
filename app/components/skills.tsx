'use client';
import React, { useState, useId } from 'react';
import { Skills } from '../data/types-data';

/**
 * In Next.js 13 experimental, all the components are server components by default.
 *
 * So we need to specify that this component is a client component with just adding the useClient
 * in the beginning of the file.
 *
 * This happens because useState hook is not supported in server components.
 */

type SkillCategory = 'soft' | 'hard';

type SkillProps = {
  skills: Skills;
};

const Skills = ({ skills }: SkillProps) => {
  /**
   * We use the useState hook to define a state variable called active and a
   * function to update it called setActive.
   *
   * The useState hook takes the initial value of the state variable as an argument.
   *
   * The useState hook returns an array with two elements, the first element is the
   * state variable and the second element is the function to update it.
   */
  const [activeTab, setActiveTab] = useState<SkillCategory>('hard');

  /**
   *  We define a function that returns the background color of the tab.
   * @param active The active tab
   * @returns The background color of the tab
   */
  const setBackgroundColor = (active: SkillCategory): String => {
    return activeTab === active ? 'bg-yellow' : 'bg-grey';
  };

  /**
   * We define a function that returns the alignment of the tab.
   * @param tab The tab
   * @returns The alignment of the tab
   *
   */
  const setTabsAlignment = (tab: SkillCategory): String => {
    return tab === 'soft' ? 'text-right' : 'text-left';
  };

  /**
   * We define an array that contains the two tabs, hard and soft skills.
   */
  const tabsType: SkillCategory[] = ['hard', 'soft'];

  /**
   * We define a variable that contains the tabs.
   * We map over the tabsType array and return a button for each item.
   */
  const tabs: JSX.Element = (
    <div className="flex">
      {tabsType.map((el) => (
        <button
          key={el}
          type="button"
          className={`btn ${setBackgroundColor(el)} ${setTabsAlignment(el)}`}
          onClick={() => setActiveTab(el)}
        >
          {el} Skills
        </button>
      ))}
    </div>
  );

  /**
   * We define a variable that contains the content of the active tab.
   *
   * We map over the skills array and return a list item for each item.
   *
   * We use the useId hook to generate a unique id for the component, have
   * to do this because we are using the same component multiple times on the page.
   *
   */
  const id = useId();

  const content = (
    <ul
      className={`skills-ul ${
        activeTab === 'soft' ? 'justify-start' : 'justify-end'
      }`}
    >
      {skills[activeTab].map((skill, i) => (
        <li key={`${id}_${i}`} className="skill">
          <span>{skill.icon}</span> {skill.text}
        </li>
      ))}
    </ul>
  );

  return (
    <div>
      {tabs}
      {content}
    </div>
  );
};

export default Skills;
