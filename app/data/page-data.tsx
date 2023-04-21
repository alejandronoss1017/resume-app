import { AboutMe, Personal, Professional, Skills, Data } from './types-data';

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
    'Bachelor of Software Engineer, Pontifical Javeriana University(2021-Present)',
    'Certified in Web Application Development, Autonomous university of Bucaramanga(03/2022-12/2023)',
    'Certified in Software Development, Sergio Arboleda University(03/2022-11/2022)'
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
    'As a highly motivated and driven individual with a passion for making a positive impact, I have a unique blend of technical and interpersonal skills, thanks to my background in computer science. I am able to tackle complex problems with ease, and I never lose sight of my ultimate goal, even when facing challenges.',
    "When I'm not working, I love hiking, reading, and spending time with my friends and family. I believe that my determination, can-do attitude, and hard work make me a true asset to any team."
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
    { icon: '💻', text: 'Python' },
    { icon: 'ʦ', text: 'TypeScript' },
    { icon: '🚀', text: 'React' },
    { icon: '💾', text: 'SQL' },
    { icon: '💾', text: 'noSQL' },
    { icon: '📈', text: 'Data Structures and Algorithms' }
  ]
};

export const professional: Professional = {
  title: 'Professional Experience',
  experiences: [
    {
      role: 'Academic Assistant, Pontifical Javeriana University. (2022-Present)',
      description:
        'Design and implement machine learning models to analyze large datasets and drive business decisions. Collaborate with cross-functional teams to develop and launch new products and features. Provide technical guidance and mentorship to junior data scientists. Conduct regular presentations to stakeholders on the findings and insights generated from data analysis.',
      current: true
    }
  ]
};