import React, { useId } from 'react';
import { Personal } from '../data/types-data';
import { Envelope, Twitter, Linkedin, Github } from './icons';
import Image from 'next/image';

// We define the type of props that our component will receive
type SidebarProps = {
  data: Personal;
};

const Sidebar = ({ data }: SidebarProps) => {
  const id = useId();
  const { name, role, education, contactLinks } = data;

  /**
   * Map over the education array and return a paragraph for each item,
   * using the index as the key.
   *
   * We use the useId hook to generate a unique id for the component, have
   * to do this because we are using the same component multiple times on the page.
   *
   * Also if we just wanted to show more information about the education, we could just add more
   * elements to the array in page-data.tsx file.
   *
   */
  const educationList: JSX.Element[] = education.map((item, i) => (
    <p key={`${id}_${i}`} className="mb-2">
      {item}
    </p>
  ));

  //For contact links, isn't necessary to use a map function because we only have 3 links and they are static.

  return (
    // Aside is a semantic HTML element that represents a section of a page, usually to represent a sidebar.
    <aside className="sidebar">
      <div className="profile-container">
        <Image
          priority
          width={300}
          height={300}
          src={'/images/profile.jpg'}
          alt="Profile image"
          className="profile-image"
        />
        <h1 className="mb-2">{name}</h1>
        <h2 className="mb-8">{role}</h2>
        {educationList}
        <div className="contact-me-container ">
          <h3>CONTACT ME</h3>
          <nav>
            <a
              className="icons-contact-me"
              href={contactLinks?.[0]}
              aria-label="Email link"
            >
              <Envelope />
            </a>
            <a
              className="icons-contact-me"
              href={contactLinks?.[1]}
              aria-label="Twitter link"
            >
              <Twitter />
            </a>
            <a
              className="icons-contact-me"
              href={contactLinks?.[2]}
              aria-label="LinkedIn link"
            >
              <Linkedin />
            </a>
            <a
              className="icons-contact-me"
              href={contactLinks?.[3]}
              aria-label="GitHub link"
            >
              <Github />
            </a>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
