import {
  AboutMe,
  Personal,
  Professional,
  Skills,
  Data,
  Project
} from './types-data';

/**
 *
 * Constants to be used in the app, this is the data that will be passed to the components,
 * and it is defined here to keep the components clean and easy to read.
 *
 * This is the only file that should be modified to change the content of the app.
 *
 * The data is defined as a constant, so it cannot be modified at runtime.
 *
 * The types of the data are defined in the types-data.ts file.
 */

export const personal: Personal = {
  name: 'Camilo Nossa',
  role: 'Software Engineer',
  education: [
    'Bachelor of Software Engineer, Pontifical Javeriana University (2021-Present)',
    'Certified in Web Application Development, Autonomous university of Bucaramanga (03/2022-12/2023)',
    'Certified in Software Development, Sergio Arboleda University (03/2022-11/2022)'
  ],
  contactLinks: [
    'mailto:emailto:calejandro_noss@outlook.com',
    'https://twitter.com/1017_camilo',
    'https://linkedin.com/in/calejandro-nossa/',
    'https://github.com/alejandronoss1017'
  ]
};

export const aboutMe: AboutMe = {
  title: 'About Me',
  body: [
    'I am very passionate about software. I have a unique combination of technical and interpersonal skills, thanks to my background as a software engineer. I am able to tackle complex problems with ease with my team and never lose sight of my end goal, even when faced with challenges.',
    "When I'm not working, I love playing music, guitar and bass are my favorites, also I play ultimate frisbee and do workout, and spending time with my friends and family. I believe that my determination and perseverance, can-do attitude, and hard work make me a true asset to any team."
  ]
};

export const skills: Skills = {
  soft: [
    { icon: '👂🏼', text: 'Active Listening' },
    { icon: '💬', text: 'Effective Communication' },
    { icon: '👥', text: 'Collaboration' },
    { icon: '⽓', text: 'Teamwork' },
    { icon: '💡', text: 'Creative Problem Solving' },
    { icon: '⌛️', text: 'Time management' }
  ],
  hard: [
    // TODO: Use devIcons for these
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg',
      iconWidth: 50,
      iconHeight: 50,
      text: 'Java'
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      iconWidth: 50,
      iconHeight: 50,
      text: 'TypeScript',
      className: 'mr-2'
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      iconWidth: 50,
      iconHeight: 50,
      text: 'React',
      className: 'mr-2'
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      iconWidth: 50,
      iconHeight: 50,
      text: 'Next.js',
      className: 'mr-2'
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
      iconWidth: 50,
      iconHeight: 50,
      text: 'Spring Boot',
      className: 'mr-2'
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      iconWidth: 50,
      iconHeight: 50,
      text: 'MySQL',
      className: 'mr-2'
    },
    {
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      iconWidth: 50,
      iconHeight: 50,
      text: 'MongoDB'
    }
  ]
};

export const professional: Professional = {
  title: 'Professional Experience',
  experiences: [
    {
      role: 'Academic Assistant, Pontifical Javeriana University. (2022-Present)',
      description: [
        'Assisted faculty members, students, and academic staff in various administrative and instructional tasks, ensuring the smooth functioning of academic activities.',
        'Provided student support services, assisting with registrations, maintaining student records, and addressing general inquiries regarding courses, programs, and academic policies.',
        'Supported faculty members in teaching activities, setting up classrooms or lab equipment, grading assignments, and providing technical assistance during lectures or presentations.'
      ],
      current: true
    }
  ]
};

export const projects: Project[] = [
  {
    title: 'Library-IDS-2023',
    description:
      "Establish communication concepts and patterns found in today's distributed systems.",
    image: 'images/Library-IDS.png',
    link: 'https://github.com/alejandronoss1017/Library-IDS-2023'
  },
  {
    title: 'Data Structures',
    description:
      'My own implementations of common data structures, such as trees and graphs and algorithms.',
    image: 'images/data-structures.png',
    link: 'https://github.com/alejandronoss1017/Data-Structures'
  },
  {
    title: 'CoffIA',
    description:
      'Web site for a coffee shop, the purpose of this project was to consume ChatGPT API to generate a chatbot.',
    image: 'images/coffia.png',
    link: 'https://coffia-project.vercel.app/'
  }
];
