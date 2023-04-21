import React from 'react';
import { Personal } from '../data/types-data';
import { Envelope, Twitter, Linkedin, Github } from './icons';
import Image from 'next/image';

// We define the type of props that our component will receive
type SidebarProps = {
  data: Personal;
};

const Sidebar = ({ data }: SidebarProps) => {
  const { name, role, education, contactLinks } = data;

  return (
    // Aside is a semantic HTML element that represents a section of a page, usually to represent a sidebar.
    <aside className="bg-black flex flex-col  content-between w-full h-auto sm:h-screen sm:justify-around sm:w-1/3 sm:fixed">
      <div className="text-white flex flex-col p-10 items-center">
        <Image src={''} alt="Profile image" />
        <h1>{name}</h1>
        <h2>{role}</h2>
        <p>{education[0]}</p>
        <p>{education[1]}</p>
        <p>{education[2]}</p>
        <div>
          <h3>Contact Me</h3>
          <a href={contactLinks[0]}>Email</a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
